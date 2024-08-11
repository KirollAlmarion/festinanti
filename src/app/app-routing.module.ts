import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', loadChildren: () => import('./features/accueil/accueil.module').then(m => m.AccueilModule) },
  { path: 'personnages', loadChildren: () => import('./features/personnages/personnages.module').then(m => m.PersonnagesModule) },
  { path: 'canevas', loadChildren: () => import('./features/canevas/canevas.module').then(m => m.CanevasModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
