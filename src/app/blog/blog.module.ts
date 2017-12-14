import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';

import { BlogRoutingModule, routedComponents } from './blog-routing.module';

import {PaginatorModule} from 'primeng/components/paginator/paginator';

import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostService } from '../services/post.service';


@NgModule({
  imports: [CommonModule,
    BlogRoutingModule,
    PaginatorModule
  ],
  providers: [PostService],
  declarations: [routedComponents,
      PostlistComponent,
      PostDetailComponent]
})
export class BlogModule { }
