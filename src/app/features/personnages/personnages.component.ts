import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-personnages',
    template: `
    <p>
      personnages works!
    </p>
  `,
    styleUrls: ['./personnages.component.css'],
    standalone: false
})
export class PersonnagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
