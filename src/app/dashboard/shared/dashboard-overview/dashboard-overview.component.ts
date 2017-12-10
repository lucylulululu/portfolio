import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-overview',
  templateUrl: './dashboard-overview.component.html',
  styleUrls: ['./dashboard-overview.component.scss']
})
export class DashboardOverviewComponent implements OnInit {
  public config: Object;

  constructor() {
  }

  ngOnInit() {
    this.config = {
           pagination: '.swiper-pagination',
           paginationClickable: true,
           nextButton: '.swiper-button-next',
           prevButton: '.swiper-button-prev',
           spaceBetween: 30
       };

  }
}
