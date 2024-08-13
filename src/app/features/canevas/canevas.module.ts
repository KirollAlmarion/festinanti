import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanevasRoutingModule } from './canevas-routing.module';
import { ListeCanevasComponent } from './components/liste-canevas/liste-canevas.component';
import { CanevasPage } from './pages/canevas/canevas.page';
import { CanevasComponent } from './components/canevas/canevas.component';
import { LayoutModule } from 'src/app/core-declarations/layout/layout.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    ListeCanevasComponent,
    CanevasPage,
    CanevasComponent,
    ListeCanevasComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    CanevasRoutingModule,
    LayoutModule
  ]
})
export class CanevasModule { }
