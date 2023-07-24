import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { MenuComponent } from './menu/menu.component';
import { TitreComponent } from './titre/titre.component';
import { RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';



@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule
  ],
  declarations: [
    MenuComponent,
    TitreComponent,
    IntroComponent
  ],
  exports: [
    MenuComponent,
    TitreComponent,
    IntroComponent
  ]
})
export class LayoutModule { }
