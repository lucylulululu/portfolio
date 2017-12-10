import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Post } from '../../model/post';
import { PostService } from '../../services/post.service';

@Component({
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  public post: Post = new Post();

  constructor(public postService: PostService,
      public activeRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params =>this.getPost(params["bId"])
    );
  }

  public getPost(id:number){
    this.postService
        .getPost(id)
        .subscribe(
          data => this.post = data,
          error => console.error(error)
        );
  }
}
