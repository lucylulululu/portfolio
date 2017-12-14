import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';

import { ProductRoutingModule, routedComponents } from './product-routing.module';


import { ProductlistComponent } from './productlist/productlist.component';
import { ProductService } from '../services/product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  imports: [CommonModule,
    ProductRoutingModule
  ],
  providers: [ProductService],
  declarations: [routedComponents,
      ProductlistComponent,ProductDetailComponent]
})
export class ProductModule { }
