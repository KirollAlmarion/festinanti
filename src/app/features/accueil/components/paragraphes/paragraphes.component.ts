import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraphes[contenu]',
  template: `
    <p *ngFor="let item of contenu" [innerHTML]="item"></p>
  `,
  styleUrls: ['./paragraphes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParagraphesComponent implements OnInit {

  @Input() contenu!: string[]
  constructor() { }

  ngOnInit(): void {
  }

}
