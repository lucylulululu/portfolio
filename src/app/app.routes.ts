import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UploadComponent } from './shared/upload/upload.component';

export const appRoutes = [
  {
    path: '',
    component : LayoutComponent,
    children : [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'product',
        loadChildren: 'app/product/product.module#ProductModule'
      },
      {
        path: 'blog',
        loadChildren: 'app/blog/blog.module#BlogModule'
      },
      {
        path: 'about',
        loadChildren: 'app/about/about.module#AboutModule'
      },
      {
        path: 'contact',
        loadChildren: 'app/contact/contact.module#ContactModule'
      }
    ]
  },
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: '',
    component : AdminLayoutComponent,
    children : [ {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule'
    }]
  }
];
