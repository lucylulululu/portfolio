import { Component, OnDestroy, OnInit , ElementRef , Renderer } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';

import { UserService } from './services/user.service';
import { User } from './model/user';
import 'rxjs/add/operator/merge';
import { Message } from 'primeng/primeng';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
 public msgs: Message[] = [];
 public currentUser: User;
  private globalClickCallbackFn: Function;
  private loginSuccessCallbackFn: Function;

  constructor(
  public elementRef: ElementRef,
  public renderer: Renderer,
  public router: Router,
  public activatedRoute: ActivatedRoute,
  public userService: UserService
  ) {

  }

  ngOnInit() {
    this.globalClickCallbackFn = this.renderer.listen(this.elementRef.nativeElement, 'click', (event: any) => {
    console.log('全局监听点击事件>' + event);
  });

  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  this.userService.currentUser
  .subscribe(
  data => {
  this.currentUser = data;
  const activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
  const routerState: RouterState = this.router.routerState;
  const routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

  console.log(activatedRouteSnapshot);
  console.log(routerState);
  console.log(routerStateSnapshot);

  },
  error => console.error(error)
  );
  }

  ngOnDestroy () {
  if (this.globalClickCallbackFn) {
  this.globalClickCallbackFn();
  }
  }

  toggle(button: any) {
  console.log(button);
  }

  public doLogout(): void {
  this.userService.logout();
  this.msgs = [];
        this.msgs.push({severity: 'success', summary: 'Success Message', detail: '退出成功'});
  this.router.navigateByUrl('');
  }
}
