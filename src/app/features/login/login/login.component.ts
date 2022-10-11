import { Component, OnInit } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../shared/styles/auth.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  emailErrorMessage = '';
  passwordErrorMessage = '';

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

  login(): void {
    // do login...
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


  constructor() { }

  ngOnInit(): void {
  }

}
