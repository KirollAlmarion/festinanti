import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Personnage } from '../../models/personnage.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-personnage[personnage]',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{personnage.nom}}</mat-card-title>
        <mat-card-subtitle>{{personnage.statut}}</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image
        [srcset]="chemin + personnage.photo + '-petit' + extension + ' 160w,' + chemin + personnage.photo + extension + ' 320w'"
        sizes="(max-width: 575px) 160px, 320px"
        [src]="chemin + personnage.photo + extension"
        alt="Photo du personnage">
      <mat-card-content>
        <div *ngIf="personnage.masque; then thenBlock else elseBlock"></div>
        <ng-template #thenBlock>Personnage masqué.</ng-template>
        <ng-template #elseBlock>Personnage non masqué.</ng-template>
        <p [innerHTML]="personnage.description"></p>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./personnage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonnageComponent implements OnInit {

  @Input() personnage! : Personnage;
  chemin = environment.imgAssets + "/personnages/";
  extension = ".jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
