import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from './new-user';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {
  private readonly url = 'http://localhost:3000'

  constructor(private _httpClient: HttpClient) { }

  addNewUser(newUser: NewUser) {
    return this._httpClient.post(`${this.url}/user/signup`, Object.freeze(newUser))
  }
}
