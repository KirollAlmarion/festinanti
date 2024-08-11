import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Canevas } from '../../models/canevas.model';
import { Personnage } from 'src/app/features/personnages/models/personnage.model';
import { PersonnageDialog } from 'src/app/features/personnages/components/personnage/personnage.component';
import { ContenuService } from 'src/app/core-services/contenu/contenu.service';


@Component({
  selector: 'app-canevas[canevas]',
  template: `
    <article>
      <h2>{{canevas.titre}}</h2>
      <p>{{canevas.description}}</p>
      <section>
        <ul>
          <li *ngFor="let role of canevas.distribution" (click)="showPerso(role.personnage)">{{role.nom}}</li>
        </ul>
      </section>
    </article>
  `,
  styleUrls: ['./canevas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CanevasComponent implements OnInit {
  @Input() canevas!: Canevas;
  personnages: Personnage[] = [];

  constructor(private contenuService: ContenuService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.contenuService.personnages.subscribe(contenu => this.personnages = contenu);
  }

  showPerso(perso: string){
    let personnage = this.personnages.find(p => p.photo === perso);
    if (personnage) this.dialog.open(PersonnageDialog, {data: personnage});
  }
}
