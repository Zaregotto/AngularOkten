import { Component, Input, OnInit } from '@angular/core';

import { IPost } from "../../interface";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: IPost

  constructor(private route: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
  }

  getInfo(): void {
    this.route.navigate([this.post.id], {relativeTo: this.activatedRoute})
  }

}
