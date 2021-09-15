import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { Comments } from './comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private readonly api = environment.apiURL

  constructor(private readonly _http: HttpClient) { }

  findComments(id: number): Observable<Comments> {
    return this._http.get<Comments>(`${this.api}/photos/${id}/comments`)
  }

  includeComment(id: number, commentText: string): Observable<Comment> {
    return this._http.post<Comment>(`${this.api}/photos/${id}/comments`, { commentText })
  }
}
