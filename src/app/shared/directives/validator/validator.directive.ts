import { Directive } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { formEmailValidator } from '../../validators/emailValidator';


@Directive({
  selector: '[emailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidatorDirective,
    multi: true,
   },]
})
export class EmailValidatorDirective implements Validator {


  constructor() { }

  validate(control: AbstractControl<string, string>): ValidationErrors {
    return formEmailValidator(control)
  }

}
