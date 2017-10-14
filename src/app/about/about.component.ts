import { Component, OnInit } from '@angular/core';
import {Contact} from "../../model/model.contact";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  contact:Contact=new Contact();
  constructor() {
    this.contact.nom="SAKTOUN";
    this.contact.prenom="ILIASS";
    this.contact.email="saktoun.iliass@gmail.com";
  }

  ngOnInit() {
  }

}
