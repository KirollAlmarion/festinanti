import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-accueil',
    template: `
    <p>
      accueil works!
    </p>
  `,
    styleUrls: ['./accueil.component.css'],
    standalone: false
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
