import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent } from '@angular/material/dialog';
import { Personnage } from '../../models/personnage.model';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'personnage-dialog',
  template: `
    <h2 mat-dialog-title>{{data.nom}}</h2>
    <mat-dialog-content>
      <div>
        <p>Rang social: {{data.statut}}</p>
        <p>{{masque}}</p>
      </div>
      <!-- <div *ngIf="data.masque; then thenBlock else elseBlock"></div>
        <ng-template #thenBlock>Rang social: {{data.statut}}       Personnage masqué.</ng-template>
        <ng-template #elseBlock>Rang social: {{data.statut}} &#9; Personnage non masqué.</ng-template> -->
        <figure>
          <img

          [src]="chemin + data.photo + extension"
          alt="Photo du personnage" />
          <figcaption [innerHTML]="data.description"></figcaption>
        </figure>
    </mat-dialog-content>
  `,
  styleUrls: ['./personnage.component.css'],
  standalone: true,
  imports: [CommonModule, MatDialogTitle, MatDialogContent]
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonnageDialog implements OnInit {

  chemin = environment.imgAssets + "/personnages/";
  extension = ".jpg";
  masque = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: Personnage) {
    this.masque = data.masque? "Personnage masqué": "Personnage non masqué";
  }

  ngOnInit(): void {
  }

}
