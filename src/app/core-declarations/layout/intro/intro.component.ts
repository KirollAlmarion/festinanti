import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-intro[contenu]',
    template: `
    <section>
      @for (item of contenu; track $index) {
        <p [innerHTML]="item"></p>
      }
    </section>
  `,
    styleUrls: ['./intro.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class IntroComponent {

  @Input() contenu!: string[];
}
