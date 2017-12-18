import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { PostService } from '../../services/post.service';
import { Post } from '../../model/post';
import { Observable } from 'rxjs/Rx';

@Component({
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent  implements OnInit {
  public itemsPerPage = 5;
  public totalRecords = 5;
  public currentPage = 1;
  public offset = 0;
  public end = 0;

  public searchText: string;
  public searchTextStream: Subject<string> = new Subject<string>();

  public postList: Array<Post>;
  public cache_postList: Array<Post>;

  constructor(public router: Router,
      public activeRoute: ActivatedRoute,
      private postService: PostService) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      this.currentPage = params.page;
      this.loadData(this.searchText);
    });

    this.searchTextStream
        .debounceTime(500)
        .distinctUntilChanged()
        .subscribe(searchText => {
      console.log('subscribe load data' + this.searchText);
          this.loadData(this.searchText)
        });
  }

  public loadData(searchText: string) {
  this.offset = (this.currentPage - 1 ) * this.itemsPerPage;
  this.end = (this.currentPage) * this.itemsPerPage;
    if ( this.cache_postList && !this.searchText ) {
      this.totalRecords = this.cache_postList.length;
      this.postList = this. cache_postList.slice(this.offset, this.end > this.totalRecords ? this.totalRecords : this.end);
      return this.postList;
    }
  return this.postService.getPostList(searchText, this.currentPage).subscribe(
  res => {
        this.totalRecords = res['data'].length;
        this.cache_postList = res['data'];
  this.postList = res['data'].slice(this.offset, this.end > this.totalRecords ? this.totalRecords : this.end);
  },
  error => {console.log(error)},
  () => {}
  );
  }

  public pageChanged(event: any): void {
  const temp = parseInt(event.page) + 1;
  this.router.navigateByUrl('blog/page/' + temp);
  }

  public searchChanged($event): void {
  this.searchTextStream.next(this.searchText);
  }

  public gotoWrite(): void {
  this.router.navigateByUrl('user/write');
  }

}
