import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

import { MenuComponent } from './menu/menu.component';
import { TitreComponent } from './titre/titre.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatTooltipModule,
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
