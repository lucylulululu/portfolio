import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, UrlTree, PRIMARY_OUTLET, UrlSegmentGroup, UrlSegment } from '@angular/router';

@Component({
  templateUrl: './upload.component.html'
})

export class UploadComponent implements OnInit {

    constructor(
        public router: Router,
        public activeRoute: ActivatedRoute) {
    }
  	ngOnInit() {
      console.log(" route " + this.activeRoute + ": " + JSON.stringify(this.activeRoute) + ":" + this.activeRoute.params);
      this.activeRoute.params.subscribe(
        params => console.log(params)
      );
  	}
}
