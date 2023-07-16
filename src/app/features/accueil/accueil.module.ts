import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilRoutingModule } from './accueil-routing.module';
import { AccueilComponent } from './accueil.component';
import { AccueilPage } from './pages/accueil/accueil.page';
import { ParagraphesComponent } from './components/paragraphes/paragraphes.component';


@NgModule({
  declarations: [
    AccueilComponent,
    AccueilPage,
    ParagraphesComponent
  ],
  imports: [
    CommonModule,
    AccueilRoutingModule
  ]
})
export class AccueilModule { }
