import { Component, OnInit } from '@angular/core';

import { PostService } from '../../../services/post.service';
import { Post } from '../../../model/post';

@Component({
  selector: 'app-dashboard-blog',
  templateUrl: './dashboard-blog.component.html'
})
export class DashboardBlogComponent implements OnInit {
  public postList:Array<Post>;

  constructor(private postService: PostService) {}

  ngOnInit() {
    return this.postService.getTopPost().subscribe(
      res=>{
        this.postList = res["data"];
      },
      error => {console.log(error)},
      () => {}
    );
  }
}
