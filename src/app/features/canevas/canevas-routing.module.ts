import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanevasPage } from './pages/canevas/canevas.page';

const routes: Routes = [{ path: '', component: CanevasPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanevasRoutingModule { }
