import { Component, OnInit,AfterViewInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, UrlTree, PRIMARY_OUTLET, UrlSegmentGroup, UrlSegment } from '@angular/router';
import { PostService } from '../../../services/post.service';
import { Post } from '../../../model/post';

@Component({
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.scss']
})

export class WritePostComponent  {

    public post:Post = new Post();
    public error : Error;

  	constructor(
        public router: Router,
        public activeRoute: ActivatedRoute,
        public postService: PostService) {
    }

    ngOnInit() {
      this.activeRoute.params.subscribe(
        params => this.getPost(params["bId"])
      );
    }

    public getPost(id:number){
      this.postService
          .getPost(id)
          .subscribe(
            data => {
              this.post = data["data"];
            },
            error => console.error(error)
          );
    }

    public doPost():void{
      const result = this.postService.doPost(this.post);
      this.router.navigateByUrl("/admin/post/page/1");
    }


}
