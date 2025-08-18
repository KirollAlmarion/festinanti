import { Component, OnInit } from '@angular/core';

import { Canevas } from '../../models/canevas.model';
import { ContenuService } from 'src/app/core-services/contenu/contenu.service';

@Component({
    template: `
    <div *ngIf="canevas; then thenBlock else elseBlock"></div>
    <ng-template #thenBlock><app-canevas [canevas]="canevas!" (retour)="this.canevas = undefined"></app-canevas></ng-template>
    <ng-template #elseBlock>
      <app-intro [contenu]="contenu"></app-intro>
      <app-liste-canevas [liste]="liste" (selection)="this.canevas = $event"></app-liste-canevas>
    </ng-template>
  `,
    styleUrls: ['./canevas.page.css'],
    standalone: false
})
export class CanevasPage implements OnInit {
  contenu: string[] = ["Voici nos canevas."];
  liste : Canevas[] = [];
  canevas?: Canevas;

  constructor(private contenuService: ContenuService) { }

  ngOnInit(): void {
    this.contenuService.introCanevas.subscribe(contenu => this.contenu = contenu);
    this.contenuService.canevas.subscribe(contenu => this.liste = contenu);
  }

  defineCanevas(saynete: Canevas){
    this.canevas = saynete;
  }
}
