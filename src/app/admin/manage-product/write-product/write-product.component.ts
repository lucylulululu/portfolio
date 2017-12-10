import { Component, OnInit,AfterViewInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, UrlTree, PRIMARY_OUTLET, UrlSegmentGroup, UrlSegment } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../model/product';

@Component({
  templateUrl: './write-product.component.html',
  styleUrls: ['./write-product.component.scss']
})

export class WriteProductComponent implements OnInit {

    public product:Product = new Product();
    public error : Error;

  	constructor(
        public router: Router,
        public activeRoute: ActivatedRoute,
        public productService: ProductService) {
    }

    ngOnInit() {
      this.activeRoute.params.subscribe(
        params => this.getProduct(params["pId"])
      );
    }

    public getProduct(id:number){
      this.productService
          .getProduct(id)
          .subscribe(
            data => {
              this.product = data["data"];
            },
            error => console.error(error)
          );
    }

    public doPost():void{
      console.log(" product " + JSON.stringify(this.product));
      const result = this.productService.doPost(this.product);
      this.router.navigateByUrl("/admin/product/page/1");
    }


}
