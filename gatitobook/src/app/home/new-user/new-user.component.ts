import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewUser } from './new-user';
import { NewUserService } from './new-user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  newUserForm!: FormGroup

  constructor(private _formBuilder: FormBuilder, private newUser: NewUserService) { }

  ngOnInit(): void {
    this.newUserForm = this._formBuilder.group({
      email: [''],
      fullName: [''],
      userName: [''],
      password: ['']
    })
  }

  register($event: any) {
    const newUser = this.newUserForm.getRawValue() as NewUser
    console.log(newUser)
  }
}
