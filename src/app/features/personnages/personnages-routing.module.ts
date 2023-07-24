import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonnagesComponent } from './personnages.component';
import { PersonnagesPage } from './pages/personnages/personnages.page';

const routes: Routes = [{ path: '', component: PersonnagesPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonnagesRoutingModule { }
