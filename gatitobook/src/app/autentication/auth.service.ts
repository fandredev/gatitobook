import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly url = 'http://localhost:3000'
  constructor(private _httpClient: HttpClient) { }

  auth(userName: string, password: string): Observable<any> {
    const body = Object.freeze({
      userName,
      password
    })
    return this._httpClient.post(`${this.url}/user/login`, body)
  }
}
