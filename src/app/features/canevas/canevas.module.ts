import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanevasRoutingModule } from './canevas-routing.module';
import { CanevasComponent } from './canevas.component';


@NgModule({
  declarations: [
    CanevasComponent
  ],
  imports: [
    CommonModule,
    CanevasRoutingModule
  ]
})
export class CanevasModule { }
