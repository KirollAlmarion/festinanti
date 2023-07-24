import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';

import { PersonnagesRoutingModule } from './personnages-routing.module';
import { PersonnagesComponent } from './personnages.component';
import { PersonnageComponent } from './components/personnage/personnage.component';
import { ListePersosComponent } from './components/liste-persos/liste-persos.component';
import { PersonnagesPage } from './pages/personnages/personnages.page';
import { LayoutModule } from "../../core-declarations/layout/layout.module";


@NgModule({
    declarations: [
        PersonnagesComponent,
        PersonnageComponent,
        ListePersosComponent,
        PersonnagesPage
    ],
    imports: [
        CommonModule,
        MatCardModule,
        PersonnagesRoutingModule,
        LayoutModule
    ]
})
export class PersonnagesModule { }
