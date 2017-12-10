import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'portfolio-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  public contact = {
    "name": "",
    "email": "",
    "note": ""
  };

  constructor(public utitliyService: UtilityService) {}

  ngOnInit() {
      console.log("--- user-contact-component ---");
  }

  public sendEmail():void {
    console.log(" data " + this.contact.name + ":" + this.contact.email + ":" + this.contact.note);
    const msg = {
      "name" : this.contact.name,
      "note" : "<p>"+this.contact.name+"</p><p>"+this.contact.email+"</p><p>"+this.contact.note+"</p>"
    }
    this.utitliyService.sendEmail(msg).subscribe(
         data => {
            console.log(" : " + data );
            // if(data.json()["errno"] == 0 ) {
            //     alert(" send email success >" + data);
            // } else {
            //   console.log("send email fail >" + data.json()["errmsg"] + " data " + data.json()["errmsg"]);
            // }
        },
        error => {
            console.error(error);
            throw error;
        }
    );
  }
}
