import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-titre',
  template: `
    <div>
      <svg
      matTooltip = "Menu" matTooltipPosition = "below" (click)="clickOnMenu()"
      version="1.1" baseProfile="full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" >
        <rect x="2.5" y="2.5" width="95" height="95" rx="10" ry="10" fill="none" stroke="yellow" stroke-width="5" />
          <g stroke="yellow" fill="none" stroke-width="5" stroke-linejoin="round" stroke-linecap="round">
            <line x1="25" y1="25" x2="75" y2="25" />
            <line transform="translate(0, 25)" x1="25" y1="25" x2="75" y2="25" />
            <line transform="translate(0, 50)" x1="25" y1="25" x2="75" y2="25" />
          </g>
      </svg>
      <a routerLink="/accueil"><img src="/assets/img/structure/scene.svg" matTooltip = "Accueil" matTooltipPosition = "right"></a>
      <p id="titre">Les Festinanti</p>
    </div>
  `,
  styleUrls: ['./titre.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitreComponent implements OnInit {

  @Output() readonly action = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  clickOnMenu(){
    this.action.emit(true);
  }

}
