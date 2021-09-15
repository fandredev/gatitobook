import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { Animals } from '../animals';
import { UserService } from './../../auth/user/user.service';
import { AnimalsService } from './../animals.service';

@Injectable({
  providedIn: 'root'
})
export class ListAnimalsResolver implements Resolve<Animals> {
  constructor(
    private readonly animalsService: AnimalsService,
    private readonly userService: UserService
  ) { }

  resolve(): Observable<Animals> {
    return this.userService.returnUser().pipe(
      switchMap(({ name }) => {
        const username = name ?? ''
        return this.animalsService.listUser(username)
      }),
      take(1)
    )
  }
}
