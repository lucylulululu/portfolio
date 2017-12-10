import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpModule, Http } from '@angular/http';

import { DashboardRoutingModule, routedComponents } from './dashboard-routing.module';
import { DashboardOverviewComponent } from './shared/dashboard-overview/dashboard-overview.component';
import { DashboardIntroductionComponent } from './shared/dashboard-introduction/dashboard-introduction.component';
import { DashboardProductsComponent } from './shared/dashboard-products/dashboard-products.component';
import { DashboardBlogComponent } from './shared/dashboard-blog/dashboard-blog.component';

import { ProductService } from '../services/product.service';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';


import { SwiperModule } from 'angular2-useful-swiper';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SwiperModule
  ],
  providers: [UserService,ProductService,PostService],
  declarations: [DashboardOverviewComponent,
    DashboardIntroductionComponent,
    DashboardProductsComponent,
    DashboardBlogComponent,
    routedComponents]
})
export class DashboardModule { }
