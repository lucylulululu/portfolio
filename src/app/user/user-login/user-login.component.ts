import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Observable';

import { User } from '../../model/user';
import { fadeIn } from '../../animations/fade-in';

@Component({
  templateUrl: './user-login.component.html',
  animations: [ fadeIn ]
})
export class UserLoginComponent implements OnInit {
    public user:User = new User();
    public error : Error;

    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public userService: UserService
    ) {
    }

    ngOnInit() {
        console.log("--- user-login-component ---");
        console.log(this.router);
        console.log(this.activatedRoute);

        let activatedRouteSnapshot:ActivatedRouteSnapshot=this.activatedRoute.snapshot;
        let routerState: RouterState = this.router.routerState;
        let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

        console.log(activatedRouteSnapshot);
        console.log(routerState);
        console.log(routerStateSnapshot);
    }

    public doLogin():void{
      console.log(this.user);
      this.userService.login(this.user).subscribe(
           data => {
              if( data.json()["errno"] == 0 ) {
                  console.log("login success>" + data);
                  this.router.navigateByUrl("/admin");
              } else {
                console.log("login fail>" + data.json()["errmsg"] + " data " + data.json()["errmsg"]);
              }
          },
          error => {
              console.error(error);
              throw error;
          }
      );
    }

    public doLogout():void{
      this.userService.logout();
      this.router.navigateByUrl("home");
    }

    public loginFacebook():void{
      this.userService.loginFacebook(this.user).subscribe(
           data => {
              if( data.json()["errno"] == 0 ) {
                  console.log("login success>" + data);
              } else {
                console.log("login fail>" + data.json()["errmsg"] + " data " + data.json()["errmsg"]);
              }
          },
          error => {
              console.error(error);
              throw error;
          }
      );
    }

    public forgetPwd():void{
      this.router.navigateByUrl("forgetpwd");
    }

}
