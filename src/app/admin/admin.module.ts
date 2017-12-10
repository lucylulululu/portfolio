import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {adminRoutes} from './admin.routes';


import { SharedModule } from '../shared/shared.module';
import { CKEditorModule } from 'ng2-ckeditor';

import { AdminComponent }   from './admin.component';

import { ProductTableComponent } from './manage-product/product-table/product-table.component';
import { WriteProductComponent } from './manage-product/write-product/write-product.component';
import { PostTableComponent } from './manage-post/post-table/post-table.component';
import { WritePostComponent } from './manage-post/write-post/write-post.component';

import { DataTableModule } from 'primeng/components/datatable/datatable';

import { ProductService } from '../services/product.service';
import { PostService } from '../services/post.service';

import { AuthGuard } from './auth-guard';

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes),
        SharedModule,
        CKEditorModule,
        DataTableModule
    ],
    exports: [],
    declarations: [
        AdminComponent,
        ProductTableComponent,
        WriteProductComponent,
        PostTableComponent,
        WritePostComponent
    ],
    providers: [PostService,ProductService,AuthGuard],
})
export class AdminModule { }
