import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { Personnage } from '../../models/personnage.model';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-liste-persos[personnages]',
    template: `
    <section>
      @for (personnage of personnages; track personnage.photo) {
        <figure (click)="this.selection.emit(personnage)">
        <img [src]="chemin + personnage.photo + extension" />
        <figcaption>
          {{personnage.nom}}
        </figcaption>
      </figure>
      }
    </section>
  `,
    styleUrls: ['./liste-persos.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ListePersosComponent {

  @Input() personnages!: Personnage[];
  @Output() selection = new EventEmitter<Personnage>();
  chemin = environment.imgAssets + "/personnages/";
  extension = "-medaillon.jpg";
  constructor() { }
}
