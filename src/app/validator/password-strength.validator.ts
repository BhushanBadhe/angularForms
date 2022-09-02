import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";



export function createPasswordStrengthValidator(): ValidatorFn{
return (control:AbstractControl) : ValidationErrors | null =>{

    const value = control.value;

    if(!value){
        return null;
    }

    const hasUpperCase = /[A-Z]+/.test(value);

    const hasLowerCase = /[a-z]+/.test(value);

    const isNumeric = /[0-9]+/.test(value);

    const passwordValid = hasUpperCase && hasLowerCase && isNumeric;

    return !passwordValid ?  {passwordStrength:true}: null;

}
}