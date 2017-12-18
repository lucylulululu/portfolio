import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { ProductService } from '../../services/product.service';
import { Product} from '../../model/product';

@Component({
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent  implements OnInit {
  public productList: Array<Product>;

  constructor(public router: Router,
      public activeRoute: ActivatedRoute,
      private productService: ProductService) {
  }

  ngOnInit() {

    return this.productService.getAllProducts().subscribe(
      res => {
        this.productList = res['data'];
      },
      error => {console.log(error)},
      () => {}
    );
  }

}
