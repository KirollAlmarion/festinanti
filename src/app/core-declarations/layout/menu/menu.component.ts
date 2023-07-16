import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <nav>
      <ul [style]="aspect">
          <li (click)="toggleMenu()"><a><mat-icon [fontIcon]="arrowIcon"></mat-icon><span>Replier</span></a></li>
          <li><a routerLink="/accueil" ><mat-icon [fontIcon]="homeIcon"></mat-icon><span>Accueil</span></a></li>
          <li><a><mat-icon fontIcon="people"></mat-icon><span>Equipe</span></a></li>
          <li><a><mat-icon fontIcon="portrait"></mat-icon><span>Personnages</span></a></li>
          <li><a><mat-icon fontIcon="auto_stories"></mat-icon><span> Canevas</span></a></li>
          <li><a><mat-icon fontIcon="event"></mat-icon><span>Actualité</span></a></li>
          <li><a><mat-icon fontIcon="diversity_2"></mat-icon><span>Partenaires</span></a></li>
          <li><a><mat-icon fontIcon="mark_as_unread"></mat-icon><span>Contact</span></a></li>
      </ul>
    </nav>
  `,
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {

  deplie = true;
  arrowIcon = "arrow_back";
  homeIcon = "home";
  aspect= "width: 10em;";

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.deplie = !this.deplie;
    if (this.deplie){
      this.arrowIcon = "arrow_back";
      this.aspect= "width: 10em;";
    }
    else{
      this.arrowIcon = "arrow_forward";
      this.aspect = "width: 3em;";
    }
  }

}
