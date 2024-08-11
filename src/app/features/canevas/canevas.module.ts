import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanevasRoutingModule } from './canevas-routing.module';
import { ListeCanevasComponent } from './components/liste-canevas/liste-canevas.component';
import { CanevasPage } from './pages/canevas/canevas.page';


@NgModule({
  declarations: [
    ListeCanevasComponent,
    CanevasPage
  ],
  imports: [
    CommonModule,
    CanevasRoutingModule
  ]
})
export class CanevasModule { }
