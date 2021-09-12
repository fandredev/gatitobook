import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { TokenService } from './../auth/token.service';
import { Animals } from './animals';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  readonly api = environment.apiURL

  constructor(private readonly _http: HttpClient, private readonly _tokenService: TokenService) { }

  listUser(name: string): Observable<Animals> {
    const token = this._tokenService.returnToken()
    const headers = new HttpHeaders().append('x-access-token', token)

    return this._http.get<Animals>(`${this.api}/${name}/photos`, { headers })
  }
}
