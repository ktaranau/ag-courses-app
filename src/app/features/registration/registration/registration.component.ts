import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { formEmailValidator } from 'src/app/shared/validators/emailValidator';

@Component({
selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
   }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, formEmailValidator]],
      password: ['', Validators.required]
    })
  }

  get form() { return this.registerForm.controls; }

  onSubmit(form: FormGroup) {
    this.submitted = true;
    console.log(form)
    if (!form.valid) {
      return
    }

    alert("Success: \n" + JSON.stringify(this.registerForm.value, null, 4));

  }

}
