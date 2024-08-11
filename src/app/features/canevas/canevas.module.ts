import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanevasRoutingModule } from './canevas-routing.module';
import { CanevasComponent } from './canevas.component';
import { ListeCanevasComponent } from './components/liste-canevas/liste-canevas.component';


@NgModule({
  declarations: [
    CanevasComponent,
    ListeCanevasComponent
  ],
  imports: [
    CommonModule,
    CanevasRoutingModule
  ]
})
export class CanevasModule { }
