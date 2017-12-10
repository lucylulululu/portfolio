import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostlistComponent } from './postlist/postlist.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'page/1',
    pathMatch:'full'
  },
  {
    path:'page/:page',
    component:PostlistComponent
  },
  {
    path: 'postdetail/:bId',
    component: PostDetailComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule { }

export const routedComponents = [PostlistComponent,PostDetailComponent];
