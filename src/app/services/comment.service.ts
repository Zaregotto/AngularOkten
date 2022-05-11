import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentInterface} from "../models/comment.interface";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url = 'https://jsonplaceholder.typicode.com/comments'

  constructor(private http: HttpClient) {

  }

  getComments(): Observable<CommentInterface[]>{
    return this
      .http
      .get<any>(this.url)
  }

  getComment(id: number): Observable<CommentInterface> {
    return this.http
      .get<any>(this.url + '/' + id);
  }
}
