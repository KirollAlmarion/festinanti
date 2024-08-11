import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogTitle, MatDialogContent } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

import { PersonnagesRoutingModule } from './personnages-routing.module';
import { PersonnagesComponent } from './personnages.component';
import { PersonnageDialog } from './components/personnage/personnage.component';
import { ListePersosComponent } from './components/liste-persos/liste-persos.component';
import { PersonnagesPage } from './pages/personnages/personnages.page';
import { IntroComponent } from 'src/app/core-declarations/layout/intro/intro.component';
import { LayoutModule } from 'src/app/core-declarations/layout/layout.module';

@NgModule({
    declarations: [
        PersonnagesComponent,
        ListePersosComponent,
        PersonnagesPage
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatDialogModule,
        MatDialogTitle,
        MatDialogContent,
        PersonnagesRoutingModule,
        PersonnageDialog,
        LayoutModule
    ]
})
export class PersonnagesModule { }
