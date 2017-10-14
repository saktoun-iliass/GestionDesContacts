import { Component, OnInit } from '@angular/core';
import {Contact} from "../../model/model.contact";
import {ActivatedRoute, Router} from "@angular/router";
import {ContactService} from "../service/contact.service";

@Component({
  selector: 'app-editer-contact',
  templateUrl: './editer-contact.component.html',
  styleUrls: ['./editer-contact.component.css']
})
export class EditerContactComponent implements OnInit {
  contact:Contact=new Contact();
  constructor(private activatedRoute:ActivatedRoute,private contactService:ContactService,     private route :Router) {
    console.log()

  }

  ngOnInit() {
    this.contactService.getContact(this.activatedRoute.snapshot.params['id']).subscribe(data=>
      {
        this.contact=data;
      },
      err=>
      {
        console.log(err);
      }
    )
  }
  modifierContact()
  {
    this.contactService.modifierContact(this.contact).subscribe(data=>
    {
      this.route.navigateByUrl('/contacts');
    },err=>
      {
        console.log(err)
      }
    )

  }

}
