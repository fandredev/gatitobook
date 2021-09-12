import { Component, Input, OnInit } from '@angular/core';
import { Animal } from './../animals';

@Component({
  selector: 'app-grid-photos-animals',
  templateUrl: './grid-photos-animals.component.html',
  styleUrls: ['./grid-photos-animals.component.css']
})
export class GridPhotosAnimalsComponent implements OnInit {
  @Input() animals: Animal[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
