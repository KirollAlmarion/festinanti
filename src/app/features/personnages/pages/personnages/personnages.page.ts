import { Component, OnInit } from '@angular/core';
import { ContenuService } from 'src/app/core-services/contenu/contenu.service';
import { Personnage } from '../../models/personnage.model';

@Component({
  template: `
    <app-intro [contenu]="contenu!"></app-intro>
    <app-liste-persos [personnages]="personnages!"></app-liste-persos>
  `,
  styleUrls: ['./personnages.page.css']
})
export class PersonnagesPage implements OnInit {

  contenu?: string[] = [];
  personnages: Personnage[] = [];
  constructor(private contenuService: ContenuService) { }

  ngOnInit(): void {
    this.contenuService.introPersonnages.subscribe(contenu => this.contenu = contenu);
    this.contenuService.personnages.subscribe(contenu => this.personnages = contenu);
  }

}
