import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <p>Quelques comédiens masqués, ou d’autres à visages découverts. Une touche de sourire, un regard narquois, des éclats de rire… Les Festinanti amusent, interrogent, divertissent, tous les types de publics et entremêlent époque baroque et actualité contemporaine.</p>
    <p>La commedia est avant tout un théâtre populaire. Les problèmes universels comme ceux du quotidien sont joués sur la place publique.</p>
    <p>Sur demande, nous viendrons jouer dans votre quartier: théâtre, maison social, parc ou autre lieu commun. Nous proposons des spectacles de 20mn à 1h ainsi que de l'animation déambulatoire et du théâtre itinérant.</p>
  `,
  styleUrls: ['./accueil.page.css']
})
export class AccueilPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
