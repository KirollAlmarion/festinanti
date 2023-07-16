import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonnagesRoutingModule } from './personnages-routing.module';
import { PersonnagesComponent } from './personnages.component';


@NgModule({
  declarations: [
    PersonnagesComponent
  ],
  imports: [
    CommonModule,
    PersonnagesRoutingModule
  ]
})
export class PersonnagesModule { }
