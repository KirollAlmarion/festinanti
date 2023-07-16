import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonnagesComponent } from './personnages.component';

const routes: Routes = [{ path: '', component: PersonnagesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonnagesRoutingModule { }
