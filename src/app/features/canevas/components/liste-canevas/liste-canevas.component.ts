import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { Canevas } from '../../models/canevas.model';

@Component({
    selector: 'app-liste-canevas[liste]',
    template: `
    <section>
      <ul>
        @for (canevas of liste; track $index) {
          <li (click)="this.selection.emit(canevas)">{{canevas.titre}}</li>
        }
        <!-- <li *ngFor="let canevas of liste" (click)="this.selection.emit(canevas)">{{canevas.titre}}</li> -->
      </ul>
    </section>
  `,
    styleUrls: ['./liste-canevas.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ListeCanevasComponent {
  @Input() liste!: Canevas[];
  @Output() selection = new EventEmitter<Canevas>();
}
