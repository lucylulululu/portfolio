import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  	constructor(
  		private router: Router,
  		public userService: UserService) {

  	}

  	canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
  		//这里可以调用真实的服务进行验证
      return true;
  	}
}
