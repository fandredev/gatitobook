import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenService } from './../token.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({} as User)

  constructor(private _tokenService: TokenService) {
    if (this._tokenService.hasToken())
      this._decodificatorJWT()
  }

  private _decodificatorJWT() {
    const token = this._tokenService.returnToken()
    const user = jwtDecode(token) as User
    this.userSubject.next(user)
  }

  returnUser(): Observable<User> {
    return this.userSubject.asObservable()
  }

  saveToken(token: string) {
    this._tokenService.saveToken(token)
    this._decodificatorJWT()
  }

  logout() {
    this._tokenService.deleteToken()
    this.userSubject.next({} as User)
  }

  isLoggedIn() {
    return this._tokenService.hasToken()
  }

}
