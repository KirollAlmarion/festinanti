import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil.component';
import { AccueilPage } from './pages/accueil/accueil.page';

const routes: Routes = [{ path: '', component: AccueilPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccueilRoutingModule { }
