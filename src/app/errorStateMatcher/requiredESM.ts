import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class RequiredErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    const value: string = control?.value ? control.value.trim() : '';
    const empty = value.length === 0;
    return !!(
      control &&
      (control.invalid || empty) &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
