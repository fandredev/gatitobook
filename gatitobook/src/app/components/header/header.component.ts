import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../../auth/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private _userService: UserService,
    private _router: Router
  ) { }

  user$ = this._userService.returnUser()

  logout($event: any) {
    console.log($event)
    this._userService.logout()
    this._router.navigate([''])
  }

}
