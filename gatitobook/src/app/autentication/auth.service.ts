import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from './../auth/user/user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly url = 'http://localhost:3000'
  constructor(private _httpClient: HttpClient, private _userService: UserService) { }

  auth(userName: string, password: string): Observable<HttpResponse<any>> {
    return this._httpClient.post(`${this.url}/user/login`, Object.freeze({ userName, password }),
      { observe: 'response' }
    ).pipe(
      tap(({ headers }) => {
        const authToken = headers.get('x-access-token') ?? ''
        this._userService.saveToken(authToken)
      })
    )
  }
}
