import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-dashboard-introduction',
  templateUrl: './dashboard-introduction.component.html',
  styleUrls: ['./dashboard-introduction.component.scss']
})
export class DashboardIntroductionComponent implements OnInit {
  public user: User = new User();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService
        .getUser(1)
        .subscribe(
          data => this.user = data,
          error => console.error(error)
        );
  }

}
