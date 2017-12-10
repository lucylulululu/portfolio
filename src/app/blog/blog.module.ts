import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { BlogRoutingModule, routedComponents } from './blog-routing.module';

import {PaginatorModule} from 'primeng/components/paginator/paginator';

import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostService } from '../services/post.service';

export function HttpLoaderFactory(http:Http){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  imports: [CommonModule,
    BlogRoutingModule,
    PaginatorModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[Http]
      }
    }
    )
  ],
  providers: [PostService],
  declarations: [routedComponents,
      PostlistComponent,
      PostDetailComponent]
})
export class BlogModule { }
