import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserService } from './../../auth/user/user.service';
import { Animals } from './../animals';
import { AnimalsService } from './../animals.service';

@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.css']
})
export class ListAnimalsComponent implements OnInit {
  animals$!: Observable<Animals>

  constructor(private _userService: UserService, private _animalService: AnimalsService) { }

  ngOnInit() {
    this.animals$ = this._userService.returnUser().pipe(
      switchMap((user) => {
        const username = user.name ?? ''
        return this._animalService.listUser(username)
      })
    )

    // this._userService.returnUser().subscribe(user => { 
    //   const username = user.name ?? ''
    //   this._animalService.listUser(username).subscribe(animals => this.animals = animals)
    // })
  }

}
