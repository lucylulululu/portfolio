import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product} from '../../../model/product';

@Component({
  selector: 'app-dashboard-products',
  templateUrl: './dashboard-products.component.html',
  styleUrls: ['./dashboard-products.component.scss']
})
export class DashboardProductsComponent implements OnInit {
  public productList:Array<Product>;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    return this.productService.getTopProducts().subscribe(
      res=>{
        this.productList = res["data"];
      },
      error => {console.log(error)},
      () => {}
    );
  }
}
