import {
  HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _tokenService: TokenService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this._tokenService.hasToken()) {
      const token = this._tokenService.returnToken()
      const headers = new HttpHeaders().append('x-access-token', token)
      request = request.clone({ headers })
    }
    return next.handle(request);
  }
}
