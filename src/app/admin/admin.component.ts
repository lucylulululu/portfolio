import { Component, OnInit} from '@angular/core';
import { flyIn } from '../animations/fly-in';

@Component({
  templateUrl: './admin.component.html',
  animations: [
    flyIn
  ]
})
export class AdminComponent implements OnInit {
  	constructor() {
    }
  	ngOnInit() {
  	}
}
