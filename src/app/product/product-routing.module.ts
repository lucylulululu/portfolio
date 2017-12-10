import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductlistComponent } from './productlist/productlist.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'page/1',
    pathMatch:'full'
  },
  {
    path:'page/:page',
    component:ProductlistComponent
  },
  {
    path: 'productdetail/:pId',
    component: ProductDetailComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule { }

export const routedComponents = [ProductlistComponent,ProductDetailComponent];
