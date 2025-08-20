import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-paragraphes[contenu]',
    template: `
    @for (item of contenu; track $index) {
      <p [innerHTML]="item"></p>
    }
  `,
    styleUrls: ['./paragraphes.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ParagraphesComponent {

  @Input() contenu!: string[]
}
