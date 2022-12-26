import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { MenuComponent } from './menu/menu.component';
import { TitreComponent } from './titre/titre.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule
  ],
  declarations: [
    MenuComponent,
    TitreComponent
  ],
  exports: [


    MenuComponent,
      TitreComponent
  ]
})
export class LayoutModule { }
