import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import {Routes, RouterModule} from "@angular/router";
import { AboutComponent } from './about/about.component';
import {Http, HttpModule} from "@angular/http";
import {ContactService} from "./service/contact.service";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { EditerContactComponent } from './editer-contact/editer-contact.component';
import {TextMaskModule} from "angular2-text-mask";

const appRoutes:Routes=[
  {path:'about',component:AboutComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'nouveauContact',component:NouveauContactComponent},
  {path:'modifierContact/:id',component:EditerContactComponent},
  {path:'',redirectTo:'/about',pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NouveauContactComponent,
    EditerContactComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    TextMaskModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
