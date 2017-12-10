import { Component, OnDestroy, OnInit } from '@angular/core';

import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  templateUrl: './about.component.html'
})
export class AboutComponent  implements OnInit {
  public user: User = new User();

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService
        .getUser(1)
        .subscribe(
          data => this.user = data,
          error => console.error(error)
        );
  }

}
