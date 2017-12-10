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
  localLang : string ;

  ngOnInit() {
    this.storage.langUpdated.subscribe(
      (lang) => {
        this.localLang = this.storage.getItem('lang')['lang'];
        this.updateMenuItemsLang(this.localLang);
        }
    );
    this.updateMenuItemsLang(this.localLang);
  }

  updateMenuItemsLang(currLang) {
    if (currLang=='en')
      {
        this.menuItems = [
          { caption: 'Overview', link: ['/dashboard'] },
          { caption: 'Services', link: ['/product'] },
          { caption: 'Blog', link: ['/blog'] },
          { caption: 'About', link: ['/about'] },
          { caption: 'Contact', link: ['/contact']}
        ];
      }
    else if (currLang=='zh-CN')
        {
          this.menuItems = [
            { caption: '首页', link: ['/dashboard'] },
            { caption: '服务', link: ['/product'] },
            { caption: '博客', link: ['/blog'] },
            { caption: '关于', link: ['/about'] },
            { caption: '联系', link: ['/contact'] }
          ];
        }
  }

  constructor(private storage: LocalStorage) {
      this.localLang = this.storage.getItem('lang')['lang'];
  }

}
