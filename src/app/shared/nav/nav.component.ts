import { Component, OnInit } from '@angular/core';
import {LocalStorage} from '../common/local-storage';

class MenuItem {
  constructor(public caption: string, public link: any[]) {
  }
}

@Component({
  selector: 'app-nav',
   templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  menuItems: MenuItem[];

  ngOnInit() {
    this.menuItems = [
      { caption: 'Overview', link: ['/dashboard'] },
      { caption: 'Services', link: ['/product'] },
      { caption: 'Blog', link: ['/blog'] },
      { caption: 'About', link: ['/about'] },
      { caption: 'Contact', link: ['/contact']}
    ];
  }

  constructor() {
  }

}
