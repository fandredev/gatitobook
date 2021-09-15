import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { Animal, Animals } from './animals';

const notModified = '304'

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  readonly api = environment.apiURL

  constructor(private readonly _http: HttpClient) { }


  listUser(name: string): Observable<Animals> {
    return this._http.get<Animals>(`${this.api}/${name}/photos`)
  }

  findById(id: number): Observable<Animal> {
    return this._http.get<Animal>(`${this.api}/photos/${id}`)
  }

  deleteAnimal(id: number): Observable<Animal> {
    return this._http.delete<Animal>(`${this.api}/photos/${id}`)
  }

  likePhoto(id: number): Observable<boolean> {
    return this._http.post(`${this.api}/photos/${id}/like`, {}, { observe: 'response' })
      .pipe(
        mapTo(true),
        catchError(error => {
          return error.status === notModified ? of(false) : throwError(error)
        })
      )
  }

  upload(description: string, allowComments: boolean, file: File) {
    const formData = new FormData()
    formData.append('description', description)
    formData.append('allowComments', allowComments ? 'true' : 'false')
    formData.append('imageFile', file)

    return this._http.post(`${this.api}/photos/upload`, formData, { observe: 'events', reportProgress: true })
  }
}
