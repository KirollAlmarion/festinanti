import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro[contenu]',
  template: `
    <section>
      <p *ngFor="let item of contenu" [innerHTML]="item"></p>
    </section>
  `,
  styleUrls: ['./intro.component.css'],
  //standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroComponent implements OnInit {

  @Input() contenu!: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
