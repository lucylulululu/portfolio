import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ProductRoutingModule, routedComponents } from './product-routing.module';


import { ProductlistComponent } from './productlist/productlist.component';
import { ProductService } from '../services/product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export function HttpLoaderFactory(http:Http){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  imports: [CommonModule,
    ProductRoutingModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[Http]
      }
    }
    )
  ],
  providers: [ProductService],
  declarations: [routedComponents,
      ProductlistComponent,ProductDetailComponent]
})
export class ProductModule { }
