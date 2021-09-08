import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../autentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = ''
  password = ''

  constructor(private _authService: AuthService, private _router: Router) { }

  login($event: any) {
    if ($event.type === 'submit') {
      this._authService.auth(this.user, this.password).subscribe(() => {
        this._router.navigate(['animals'])
      }, (error: HttpErrorResponse) => {
        alert('Usuário ou senha inválidos.')
        console.log(error)
      })
    }
  }

}
