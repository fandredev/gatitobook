import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from '../animals';
import { AnimalsService } from './../animals.service';

@Component({
  selector: 'app-detail-animal',
  templateUrl: './detail-animal.component.html',
  styleUrls: ['./detail-animal.component.css']
})
export class DetailAnimalComponent implements OnInit {
  animal$!: Observable<Animal>
  animalId!: number

  constructor(
    private readonly _animalService: AnimalsService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit() {
    this.animalId = this._activatedRoute.snapshot.params.animal_id
    this.animal$ = this._animalService.findById(this.animalId)
  }

  like() {
    this._animalService.likePhoto(this.animalId).subscribe(liked => {
      if (liked)
        this.animal$ = this._animalService.findById(this.animalId)
    })
  }

  deletePhoto() {
    this._animalService.deleteAnimal(this.animalId).subscribe(
      () => this._router.navigate(['/animals/'])
      , error => console.log(error))
  }
}
