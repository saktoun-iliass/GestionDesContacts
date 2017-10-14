import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Contact} from "../../model/model.contact";

@Injectable()
export class ContactService {

  constructor(private http:Http) { }

  getContacts(motCle:string,page:number,size:number){
    return this.http.get("http://localhost:8080/chercherContacts?mc="+motCle+"&size="+size+"&page="+page).
    map(resp=>resp.json());
  }
  saveContact(contact:Contact){
    return this.http.post("http://localhost:8080/contacts",contact).
    map(resp=>resp.json());
  }
  getContact(id:number){
    return this.http.get("http://localhost:8080/contacts/"+id).
    map(resp=>resp.json());
  }
  modifierContact(contact:Contact){
    return this.http.put("http://localhost:8080/contacts/"+contact.id,contact).
    map(resp=>resp.json());
  }
  supprimerContact(contact:Contact){
    return this.http.delete("http://localhost:8080/contacts/"+contact.id).
    map(resp=>resp.json());
  }

}
