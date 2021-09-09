import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUser } from './new-user';
import { NewUserService } from './new-user.service';
import { UserExistsService } from './user-exists.service';
import lowerCaseValidator, { userPasswordEqualsValidator } from './validators';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  newUserForm!: FormGroup

  constructor(
    private _formBuilder: FormBuilder,
    private _newUser: NewUserService,
    private _userExists: UserExistsService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.newUserForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [lowerCaseValidator], [this._userExists.userExists()]],
      password: ['']
    }, {
      validators: [userPasswordEqualsValidator]
    })
  }

  register($event: any) {
    if ($event.type === 'submit' && this.newUserForm.valid) {
      const newUser = this.newUserForm.getRawValue() as NewUser
      this._newUser.addNewUser(newUser).subscribe(() => {
        this._router.navigate([''])
      }, (error: HttpErrorResponse) => {
        console.error(`Error: ${error}`)
      })
    }

  }
}
