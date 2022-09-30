import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

const emailRegex: RegExp = new RegExp("\\b[\\w\\.-]+@[\\w\\.-]+\\.\\w{2,4}\\b");

export const emailValidator = regExpValidator(emailRegex)

export function regExpValidator(nameRe: RegExp) {
    return (str: string): ValidationErrors => {
        return nameRe.test(str) ? null : { isValid: false, value: str }
    };
}