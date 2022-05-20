import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostService } from "./services";
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';


@NgModule({
  declarations: [
    PostDetailsComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostService
  ]
})
export class PostModule { }
