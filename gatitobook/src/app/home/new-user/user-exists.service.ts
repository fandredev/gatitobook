import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';
import { NewUserService } from './new-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserExistsService {

  constructor(private newUserService: NewUserService) { }

  userExists() {
    return ({ valueChanges }: AbstractControl) => {
      return valueChanges.pipe(
        switchMap((name) => this.newUserService.verifyUserInDatabase(name)),
        map((exists) => exists ? {
          userExists: true
        } : null),
        first()
      )
    }
  }
}
