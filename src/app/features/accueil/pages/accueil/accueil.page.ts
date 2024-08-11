import { Component, OnInit } from '@angular/core';
import { ContenuService } from 'src/app/core-services/contenu/contenu.service';

@Component({
  template: `
    <div *ngIf="contenu; then thenBlock else elseBlock"></div>
    <ng-template #thenBlock><app-intro [contenu]="contenu!"></app-intro></ng-template>
    <ng-template #elseBlock>Bienvenue, cher public.</ng-template>
  `,
  styleUrls: ['./accueil.page.css']
})
export class AccueilPage implements OnInit {

  contenu?: string[] = [];
  constructor(private index: ContenuService) {}

  ngOnInit(): void {
    this.index.introAccueil.subscribe(contenu => this.contenu = contenu);
  }

}
