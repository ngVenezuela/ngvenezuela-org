import { Injectable } from '@angular/core';
import {
  ValidatorFn,
  ValidationErrors,
  AbstractControl
} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  /**
   * Check that GMAIL account is not misspelling
   * @param error ValidationErrors
   */
  gmailValidator(error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if (!control.value) {
        return null;
      }

      const partialDomain = new RegExp('(@(gmail|gmai|gnail|gamil|gami)\.)');
      const fullDomain = new RegExp('(@(gmail)\.com)');
      if (partialDomain.test(control.value)) {
        // is a gmail account
        const valid = fullDomain.test(control.value);
        return valid ? null : error;
      } else {
        return null;
      }

    };
  }

  shouldBeTrueValidator(error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {

      if (control.value === true) {
        return null;
      } else {
        return error;
      }
    };
  }

  /**
   * Generic Custom Regex Validator
   *
   * Usage example:
   *  this.formUtilsService.regexValidator(new RegExp('(?=.*?[A-Z])'), {'oneUpperCaseLetter': 'At least one uppercase letter is required'})
   *
   *  Where:
   *    'oneUpperCaseLetter' Is the name of error that will rise
   *    'At least one uppercase letter is required' Is the description of the error for the developer
   *
   * 15/nov/2018 - The current Angular Validator of regex pattern don't take error object.
   * https://github.com/angular/angular/blob/7.0.4/packages/forms/src/validators.ts#L296
   *
   * Referecies:
   * - https://stackoverflow.com/a/48844043/2513972
   * - https://stackoverflow.com/a/19605207/2513972
   *
   * @param regex RegExp - Regular Expression
   * @param error ValidationErrors
   */
  regexValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if (!control.value) {
        return null;
      }
      const valid = regex.test(control.value);
      return valid ? null : error;
    };
  }


  errorKeys(errors: object): string {
    // should exist before a *ngIf that check if the control is invalid.
    return Object.keys(errors)[0];
  }


}



