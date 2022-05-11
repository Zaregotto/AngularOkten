import { Component, OnInit } from '@angular/core';
import {PostService} from "../../services/post.service";
import {PostInterface} from "../../models/post.interface";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService) {

  }
  posts: PostInterface[];

  ngOnInit(): void {
    this.postService
      .getPosts()
      .subscribe(value => this.posts = value);
  }

}
