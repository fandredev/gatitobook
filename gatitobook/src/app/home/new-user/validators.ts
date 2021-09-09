import { AbstractControl, FormGroup } from "@angular/forms";

export default function lowerCaseValidator(control: AbstractControl) {
  const value = control.value as string
  if (value !== value.toLowerCase())
    return { lowercase: true }

  else
    return null
}

export function userPasswordEqualsValidator(formGroup: FormGroup) {
  const username: string = formGroup.get('userName')?.value ?? ''
  const password: string = formGroup.get('password')?.value ?? ''

  if (username.trim() + password.trim()) {
    return username !== password ? null : {
      userEqualsPassword: true
    }
  }
  else return null
}