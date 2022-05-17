import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PostInterface } from "../../models/Post.interface";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post : PostInterface;
  constructor(private route: Router,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
  }

  navigateMe(post: PostInterface) {
    this.route.navigate(['post-details', post.id], {relativeTo: this.activatedRoute, state: {data: post}});
  }

}
