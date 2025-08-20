import { Component, OnInit } from '@angular/core';
import { ContenuService } from 'src/app/core-services/contenu/contenu.service';

@Component({
    template: `
    @if (contenu){
      <app-intro [contenu]="contenu!"></app-intro>
    }
    @else {
      <app-intro [contenu]="['Bienvenue, cher public.']"></app-intro>
    }
  `,
    styleUrls: ['./accueil.page.css'],
    standalone: false
})
export class AccueilPage implements OnInit {

  contenu?: string[] = [];
  constructor(private index: ContenuService) {}

  ngOnInit(): void {
    this.index.introAccueil.subscribe(contenu => this.contenu = contenu);
  }
}
