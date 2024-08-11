import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanevasComponent } from './canevas.component';

const routes: Routes = [{ path: '', component: CanevasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanevasRoutingModule { }
