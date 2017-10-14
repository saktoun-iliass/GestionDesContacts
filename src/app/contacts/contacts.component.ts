import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {ContactService} from "../service/contact.service";
import {Contact} from "../../model/model.contact";
import {DialogService} from "ng2-bootstrap-modal";
import {ConfirmComponent} from "../confirm/confirm.component";
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
  constructor(private http:Http,private contactService:ContactService,private dialogService: DialogService) { }

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

this.dialogService.addDialog(ConfirmComponent, {
  title: 'Suppression',
  message: 'Voulez vous vraiment supprimer ce contact ?'
}).subscribe(isConfirmed=>
  {
    if(isConfirmed)
    {
      this.contactService.supprimerContact(contact).subscribe(data=>
      {
        this.pageContacts.content.splice(
          this.pageContacts.content.indexOf(contact),1
        );
      },err=>
      {
        console.log(err);
      })
    }
    else{
    }
  }

)


  }

}
