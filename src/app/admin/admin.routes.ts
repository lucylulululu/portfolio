import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ProductTableComponent } from './manage-product/product-table/product-table.component';
import { WriteProductComponent } from './manage-product/write-product/write-product.component';
import { PostTableComponent } from './manage-post/post-table/post-table.component';
import { WritePostComponent } from './manage-post/write-post/write-post.component';

import { AuthGuard } from './auth-guard';

export const adminRoutes=[
  {
  path:'',
  canActivate: [AuthGuard],
  component: AdminComponent,
    children: [
      { path: '',redirectTo:'product/page/1',pathMatch:'full'},
      { path: 'product/page/:page', component: ProductTableComponent },
      { path: 'product/write', component: WriteProductComponent },
      { path: 'product/write/:pId', component: WriteProductComponent },
      { path: 'post/page/:page', component: PostTableComponent },
      { path: 'post/write', component: WritePostComponent },
      { path: 'post/write/:bId', component: WritePostComponent },
      { path: '**', redirectTo:'product/page/1' }
    ]
}
];
