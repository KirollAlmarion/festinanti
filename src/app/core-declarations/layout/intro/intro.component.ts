import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-intro[contenu]',
    template: `
    <section>
      @for (item of contenu; track $index) {
        <p [innerHTML]="item"></p>
      }
      <!-- <p *ngFor="let item of contenu" [innerHTML]="item"></p> -->
    </section>
  `,
    styleUrls: ['./intro.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class IntroComponent implements OnInit {

  @Input() contenu!: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
