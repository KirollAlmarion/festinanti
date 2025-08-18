import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContenuService } from 'src/app/core-services/contenu/contenu.service';
import { Personnage } from '../../models/personnage.model';
import { PersonnageDialog } from '../../components/personnage/personnage.component';

@Component({
    template: `
    <app-intro [contenu]="contenu!"></app-intro>
    <app-liste-persos [personnages]="personnages!" (selection)="showPerso($event)"></app-liste-persos>
  `,
    styleUrls: ['./personnages.page.css'],
    standalone: false
})
export class PersonnagesPage implements OnInit {

  contenu?: string[] = [];
  personnages: Personnage[] = [];
  constructor(private contenuService: ContenuService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.contenuService.introPersonnages.subscribe(contenu => this.contenu = contenu);
    this.contenuService.personnages.subscribe(contenu => this.personnages = contenu);
  }

  showPerso(perso: Personnage) {
    this.dialog.open(PersonnageDialog, {
      data: perso
    });
  }

}
