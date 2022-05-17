import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentInterface} from "../models/Comment.interface";
import {Params} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url = 'https://jsonplaceholder.typicode.com/comments'

  constructor(private http: HttpClient) {
  }

  getComments(): Observable<CommentInterface[]> {
    return this.http.get<CommentInterface[]>(this.url);
  }

    getComment(id: string): Observable<CommentInterface> {
    return this.http.get<CommentInterface>(this.url + '/' + id);
  }
}
