import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule , PreloadAllModules } from '@angular/router';
import { appRoutes } from './app.routes';

import { SharedModule } from './shared/shared.module';
import {LocalStorage} from './shared/common/local-storage';



import { AppComponent } from './app.component';

/* Feature Modules */
import { LayoutComponent } from './layout/layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}),
    SharedModule
  ],
  providers: [LocalStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
