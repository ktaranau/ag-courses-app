import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SessionStorageService } from 'src/app/auth/services/session-storage.service';
import { formEmailValidator } from 'src/app/shared/validators/emailValidator';

@Component({
selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
   }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, formEmailValidator]],
      password: ['', Validators.required]
    })
  }

  get form() { return this.registerForm.controls; }

  onSubmit(form: FormGroup): void {

    this.submitted = true;
    if (!form.valid) {
          return
        }

    this.authService.register(this.form.name.value, this.form.email.value, this.form.password.value).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        console.log(err)
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }


  // onSubmit(form: FormGroup) {
  //   this.submitted = true;
  //   console.log(form)
  //   if (!form.valid) {
  //     return
  //   }

  //   alert("Success: \n" + JSON.stringify(this.registerForm.value, null, 4));

  // }

}
