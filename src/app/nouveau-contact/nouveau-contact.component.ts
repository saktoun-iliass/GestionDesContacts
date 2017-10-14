import { Component, OnInit } from '@angular/core';
import {Contact} from "../../model/model.contact";
import {ContactService} from "../service/contact.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {
  contact:Contact=new Contact();
  contactForm:FormGroup;
  mode:number=1;
  nouveauC:boolean=false;
  public myModel = '';
  public mask = [/[0]/, ' ', /\d/, ' ', /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

  constructor(private contactService:ContactService,
              private fb:FormBuilder) { }

  ngOnInit() {
    this.contactForm=this.fb.group({
      nom:[this.contact.nom,Validators.required],
      prenom:[this.contact.prenom,Validators.required],
      dateNaissance:[this.contact.dateNaissance,Validators.required],
      email:[this.contact.email,[Validators.required,Validators.email]],
      tel:[this.contact.tel,Validators.required],

    });
    this.contactForm.valueChanges.subscribe(
      data =>
      {this.onValueChanged(data);}
    );
  }
  onValueChanged(data?:any)
  {

    const form =this.contactForm.controls;
    for(const field in form)
    {

      //clear previous error message (if any)
      this.formErrors[field]='';
      const control=form[field];

      if(control && control.dirty && !control.valid)
      {
        const messages=this.validationMessages[field];

        for(const key in control.errors)
        {
          this.formErrors[field]+=messages[key]+' ';
        }
      }
    }
  }
  validationMessages={
    'nom':
      {
        'required':'Nom est obligatoire'
      },
    'prenom':
      {
        'required':'Prenom est obligatoire'
      }
    ,
    'dateNaissance':
      {
        'required':'Date de naissance est obligatoire'

      }
    ,
    'tel':
      {
        'required':'Télé est obligatoire'

      }
    ,
    'email':
      {
        'email':'Veuillez inclure "@" dans l\'adresse Email.',
        'required':'Email est obligatoire.'
      }
  }

  formErrors={
    'nom':'',
    'prenom':'',
    'dateNaissance':'',
    'tel':'',
    'email':'',
  }

  nouveauContact()
  {
    this.contact=new Contact();
    this.contactForm=this.fb.group({
      nom:[this.contact.nom,Validators.required],
      prenom:[this.contact.prenom,Validators.required],
      dateNaissance:[this.contact.dateNaissance,Validators.required],
      email:[this.contact.email,[Validators.required,Validators.email]],
      tel:[this.contact.tel,Validators.required],

    });
    this.contactForm.valueChanges.subscribe(
      data =>
      {this.onValueChanged(data);}
    );
   this.mode=1;

  }
  updateContact(values: Object) {
    (<any>Object).assign(this.contact, values);
  }

  onSaveContact()
  {
    this.nouveauC=true;
    this.updateContact(this.contactForm.value);
    this.contactService.saveContact(this.contact).subscribe(data=>
      {
        this.contact=data;
        console.log( this.contact);
        this.mode=2;
      },
      err=>
      {
        console.log(err);
      }
    )
  }

}
