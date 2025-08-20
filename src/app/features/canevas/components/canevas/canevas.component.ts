import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Canevas } from '../../models/canevas.model';
import { Personnage } from 'src/app/features/personnages/models/personnage.model';
import { PersonnageDialog } from 'src/app/features/personnages/components/personnage/personnage.component';
import { ContenuService } from 'src/app/core-services/contenu/contenu.service';

@Component({
    selector: 'app-canevas[canevas]',
    template: `
    <button mat-fab extended (click)="this.retour.emit()"><mat-icon>arrow_back</mat-icon>Retour à la liste</button>
    <article>
      <h2>{{canevas.titre}}</h2>
      <p>{{canevas.description}}</p>
      <section>
        <mat-list>
          @for (role of canevas.distribution; track role.nom) {
            <mat-list-item>
              <span matListItemTitle (click)="showPerso(role.personnage)">{{role.nom}}</span>
              {{role.commentaire}}
            </mat-list-item>
          }
          <!-- <mat-list-item *ngFor="let role of canevas.distribution">
            <span matListItemTitle (click)="showPerso(role.personnage)">{{role.nom}}</span>
            {{role.commentaire}}
          </mat-list-item> -->
        </mat-list>
      </section>
    </article>
  `,
    styleUrls: ['./canevas.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CanevasComponent implements OnInit {
  @Input() canevas!: Canevas;
  @Output() retour = new EventEmitter();
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
