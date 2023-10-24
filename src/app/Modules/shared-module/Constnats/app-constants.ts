import {AbstractControl, ValidatorFn} from '@angular/forms';

export const RegexPattern = {
  Email: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
  // password: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
};

export function whitespaceValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (typeof value === 'string' && value.trim().length === 0) {
      return {whitespace: true};
    }
    return null;
  };
}

export interface ValidationMessageParameters {
  controlName: string,
  length?:number
}

export function GetValidationMessage(
  key: string,
  params: ValidationMessageParameters,
  length?:number
): string {
  if (!(key in ValidationMessages)) return ValidationMessages.unknown;

  let msg = ValidationMessages[key];
  console.log(length);
  
  for (const key of Object.keys(params)) {
    
    msg = msg.replace(`{${key}}`, params[key]);
    params.length = length;
  }
  return msg;
}

export const ValidationMessages: { [k: string]: string } = {
  unknown: 'Invalid Error',
  required: '{controlName} field is required',
  minlength: 'You should enter at least {length} characters Not spaces',
  maxlength:'You should enter at maximum {length} characters',
  max:'You should enter at maximum {length} characters',
  min:'You should enter at minimum {length} characters',
  whitespace: '{controlName} field is required Not spaces',
  pattern:'{controlName} field value is not true'
};
