import { Component, OnInit} from '@angular/core';


class MenuItem {
  constructor(public caption: string, public link: any[]) {
  }
}

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html'
})

export class AdminNavComponent implements OnInit {
    menuItems: MenuItem[];

  	ngOnInit() {
      this.menuItems = [
        { caption: 'Manage Products', link: ['/admin/product/page/1'] },
        { caption: 'Manage Blogs', link: ['/admin/post/page/1'] }
      ];
  	}
}
