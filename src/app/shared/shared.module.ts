import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UserLoginComponent } from '../user/user-login/user-login.component';
import { NavComponent } from './nav/nav.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { UploadComponent } from './upload/upload.component';

import { UserService } from '../services/user.service';

@NgModule({
  imports:[
  	CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations:[
    NavComponent,
    AdminNavComponent,
    UserLoginComponent,
    UploadComponent
  ],
  exports:[
  	CommonModule,
  	FormsModule,
    RouterModule,
    NavComponent,
    AdminNavComponent,
    UserLoginComponent,
    UploadComponent
  ],
  providers: [UserService]
})

export class SharedModule {

}
