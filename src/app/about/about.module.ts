import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule, routedComponents } from './about-routing.module';
import { UserService } from '../services/user.service';


@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  providers: [UserService],
  declarations: [routedComponents]
})

export class AboutModule { }
