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
import {BootstrapModalModule} from "ng2-bootstrap-modal";
import {ConfirmComponent} from "./confirm/confirm.component";

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
    EditerContactComponent,
    ConfirmComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    TextMaskModule,
    BootstrapModalModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ContactService],
  entryComponents: [
    ConfirmComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
