import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostInterface} from "../models/post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) {

  }

  getPosts(): Observable<PostInterface[]> {
    return this
      .http
      .get<any>(this.url)
  }

  getPost(id: number): Observable<PostInterface> {
    return this.http
      .get<any>(this.url + '/' + id);

  }
}
