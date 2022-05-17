import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PostDetailsInterface } from "../../models/PostDetails.interface";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetailsObj: PostDetailsInterface;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

    this.activatedRoute.params.subscribe(value => {
      this.postDetailsObj = (this.router.getCurrentNavigation()?.extras?.state?.['data'] as PostDetailsInterface);
    });

  }

  ngOnInit(): void {
  }

}
