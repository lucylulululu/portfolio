import { Component, OnInit, Input} from '@angular/core';
import { flyIn } from '../../../animations/fly-in';
import { ActivatedRoute, Router, UrlTree, PRIMARY_OUTLET, UrlSegmentGroup, UrlSegment } from '@angular/router';
import { PostService } from '../../../services/post.service';
import { DataTableModule } from 'primeng/primeng';

@Component({
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class PostTableComponent implements OnInit {

    public postList:Array<any>;

  	constructor(
        public router: Router,
        public activeRoute: ActivatedRoute,
        public postService: PostService
    ) {

    }

  	ngOnInit() {
      console.log(" post table init");
  		this.activeRoute.params.subscribe(
        params =>this.getPostsByPage(params["page"])
      );
  	}

    public getPostsByPage(page:Number){
      return this.postService.getPostTable().subscribe(
        res=>{
          console.log(res);
          this.postList=res["data"];
        },
        error => {console.log(error)},
        () => {}
      );
    }

    public pageChanged(event:any):void {
      let urlTree:UrlTree=this.router.parseUrl(this.router.url);
      const g: UrlSegmentGroup = urlTree.root.children[PRIMARY_OUTLET];
      const s: UrlSegment[] = g.segments;
      this.router.navigateByUrl(s[0]+"/post/page/"+event.page);
    }

    public goToWrite():void{
      this.router.navigateByUrl("/admin/post/write");
    }

    public editPost(event):void{
      this.router.navigateByUrl("/admin/post/write/"+event.bid);
    }

    public top(event):void{
        var target = event.currentTarget;
        var nameAttr = target.attributes.name;
        var value = nameAttr.nodeValue;
        console.log("postId>"+value);
    }

    public unTop(event):void{
        var target = event.currentTarget;
        var nameAttr = target.attributes.name;
        var value = nameAttr.nodeValue;
        console.log("postId>"+value);
    }

    public delPost(event):void{
        var target = event.currentTarget;
        var nameAttr = target.attributes.name;
        var value = nameAttr.nodeValue;
        console.log("postId>"+value);
    }

    public onRowSelect(event):void{
      console.log(event.data);
    }

    public onRowUnselect(event):void{
      console.log(event.data);
    }
}
