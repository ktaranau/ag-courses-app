import { Component, OnInit } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SessionStorageService } from 'src/app/auth/services/session-storage.service';
import { UserService } from 'src/app/user/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../shared/styles/auth.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };

  email = '';
  password = '';
  emailErrorMessage = '';
  passwordErrorMessage = '';
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = []
  errorMessage = ''

  emailValueChange(email: string, errors: ValidationErrors): void {
    this.email = email;
    this.validationCheck(errors, 'Email')
  }

  passwordValueChange(password: string, errors: ValidationErrors): void {
    this.password = password;
    this.validationCheck(errors, 'Password');
  }

  onFormSubmit(form: FormGroup) {
    alert(JSON.stringify(form.value, null, 2));
  }

  onSubmit(): void {
    console.log(this.email, this.password)
    this.authService.login(this.email, this.password).subscribe(

      data => {
        console.log(data)
        let token = data.result.split(' ')[1]
        this.sessionStorage.setToken(token)
        this.sessionStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.sessionStorage.getUser().roles;
        this.router.navigateByUrl("/courses")
      },
      err => {
        console.log(err)
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  logout(): void{
    this.authService.logout().subscribe(
      // (data) => {
      //   window.location.reload();
      //   console.log(data),
      //   this.isLoggedIn = false;
      // },
      // err => {
      //   console.log(err)
      // }
    )
  }

  private validationCheck(
    errors: ValidationErrors,
    fieldName: 'Email' | 'Password'
  ): void {
    console.log(errors)
    let errorMessage: string;
    if (!errors) {
      errorMessage = '';
    } else if (errors['required']) {
      errorMessage = `${fieldName} is required`;
    } else if (errors['emailValid']) {
      errorMessage = `Incorrect format`;
    } else if (errors['minlength']) {
      errorMessage = 'The minimum length of the password is 8 characters';
    }

    this.setErrorMessage(fieldName, errorMessage);
  }

  private setErrorMessage(
    fieldName: 'Email' | 'Password',
    errorMessage: string
  ): void {
    if (fieldName === 'Email') {
      this.emailErrorMessage = errorMessage;
    } else {
      this.passwordErrorMessage = errorMessage;
    }
  }

  constructor(private authService: AuthService, private sessionStorage: SessionStorageService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if (this.sessionStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.sessionStorage.getUser().roles;
    }
  }

  reloadPage(): void {
    // window.location.reload();
  }

}
