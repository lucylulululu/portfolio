import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule, routedComponents } from './contact-routing.module';
import { UtilityService } from '../services/utility.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingModule
  ],
  providers: [UtilityService],
  declarations: [routedComponents,ContactComponent]
})
export class ContactModule { }
