import { Component, Input } from '@angular/core';
import { environment } from './../../../environments/environment';

const API = environment.apiURL

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent {
  @Input() description = ''
  private originalURL = ''

  @Input() set url(url: string) {
    if (url.startsWith('data'))
      this.originalURL = url
    else this.originalURL = `${API}/imgs/${url}`
  }

  constructor() { }

  get url(): string {
    return this.originalURL
  }



}
