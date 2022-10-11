import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

const emailRegex: RegExp = new RegExp("\\b[\\w\\.-]+@[\\w\\.-]+\\.\\w{2,4}\\b");

export const emailValidator = regExpValidator(emailRegex)

export function regExpValidator(nameRe: RegExp) {
    return (str: string): ValidationErrors => {
        let q = nameRe.test(str)
        return nameRe.test(str) ? null : { value: str }
    };
}

export const formEmailValidator = (control: AbstractControl) => {
    const result = emailValidator(control.value)     
    return result ? {emailValid: result } : null
}