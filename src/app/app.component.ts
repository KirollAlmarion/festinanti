import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <app-titre (action)="sidenav.toggle()"></app-titre>
    <mat-sidenav-container class="example-container" [hasBackdrop]="false">
      <mat-sidenav #sidenav mode="over" disableClose opened>
        <app-menu></app-menu>
      </mat-sidenav>
      <mat-sidenav-content>
        <main>
          <router-outlet></router-outlet>
        </main>
      </mat-sidenav-content>
    </mat-sidenav-container>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Festinanti';
}
