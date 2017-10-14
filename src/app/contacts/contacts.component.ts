import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {ContactService} from "../service/contact.service";
import {Contact} from "../../model/model.contact";
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  pageContacts:any;
  motCle:string="";
  pageCourante:number=0;
  size:number=5;
  pages:Array<number>;
  supprimer:boolean=false;
  constructor(private http:Http,private contactService:ContactService) { }

  ngOnInit() {

this.chercher();
  }
  chercher()
  {
    this.contactService.getContacts(this.motCle,this.pageCourante,this.size).subscribe(data=>
      {
        this.pageContacts=data;
        this.pages=new Array(data.totalPages);
      }
    ),err =>
    {
      console.log(err)
    }
  }
  gotoPage(i:number)
  {
this.pageCourante=i;
this.chercher();
  }

  supprimerContact(contact:Contact)
  {
this.supprimer=true;
    this.contactService.supprimerContact(contact).subscribe(data=>
    {
      this.pageContacts.content.splice(
        this.pageContacts.content.indexOf(contact),1
      );
      this.supprimer=false;
    },err=>
    {
      this.supprimer=false;
      console.log(err);
    })

  }

}
