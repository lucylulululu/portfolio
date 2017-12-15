import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public product: Product = new Product();

  constructor(public productService: ProductService,
      public activeRoute: ActivatedRoute
  ) {
    console.log(this.productService);
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params =>this.getProduct(params["pId"])
    );
  }

  public getProduct(id:number){
    this.productService
        .getProduct(id)
        .subscribe(
          data => this.product = data["data"],
          error => console.error(error)
        );
  }
}
