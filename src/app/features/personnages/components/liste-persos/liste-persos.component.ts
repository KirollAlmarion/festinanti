import { ChangeDetectionStrategy, Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Personnage } from '../../models/personnage.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-liste-persos[personnages]',
  template: `
    <section>
      <figure *ngFor="let personnage of personnages" (click)="this.selection.emit(personnage)">
        <img [src]="chemin + personnage.photo + extension" />
        <figcaption>
          {{personnage.nom}}
        </figcaption>
      </figure>
    </section>
  `,
  styleUrls: ['./liste-persos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListePersosComponent implements OnInit {

  @Input() personnages!: Personnage[];
  @Output() selection = new EventEmitter<Personnage>();
  chemin = environment.imgAssets + "/personnages/";
  extension = "-medaillon.jpg";
  constructor() { }

  ngOnInit(): void {
  }

  affichePerso(perso: Personnage){
    this.selection.emit(perso);
  }

}
