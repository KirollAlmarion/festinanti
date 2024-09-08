import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Personnage } from 'src/app/features/personnages/models/personnage.model';
import { Canevas } from 'src/app/features/canevas/models/canevas.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContenuService {

  introAccueil = new BehaviorSubject<string[]>(["Bienvenue!"]);
  introCanevas = new BehaviorSubject<string[]>(["Nos œuvres"]);
  introEquipe = new BehaviorSubject<string[]>(["Voici les joyeux drilles!"]);
  introPersonnages = new BehaviorSubject<string[]>(["La commedia dell'arte met en scène une quinzaine d'archétypes."]);
  introActualites = new BehaviorSubject<string[]>(["Au programme..."]);
  introPartenaires = new BehaviorSubject<string[]>(["Notre réseau."]);
  introContact = new BehaviorSubject<string[]>(["Comment nous joindre."]);

  personnages = new BehaviorSubject<Personnage[]>([]);
  canevas = new BehaviorSubject<Canevas[]>([]);

  constructor(private http: HttpClient) {
    this.http.get<string[]>(`${environment.txtAssets}/accueil/accueil.json`).subscribe(contenu => this.introAccueil.next(contenu));
    this.http.get<string[]>(`${environment.txtAssets}/canevas/intro.json`).subscribe(contenu => this.introCanevas.next(contenu));
    this.http.get<string[]>(`${environment.txtAssets}/equipe/equipe.json`).subscribe(contenu => this.introEquipe.next(contenu));
    this.http.get<string[]>(`${environment.txtAssets}/personnages/personnages.json`).subscribe(contenu => this.introPersonnages.next(contenu));
    this.http.get<string[]>(`${environment.txtAssets}/actualites/actualites.json`).subscribe(contenu => this.introActualites.next(contenu));
    this.http.get<string[]>(`${environment.txtAssets}/partenaires/partenaires.json`).subscribe(contenu => this.introPartenaires.next(contenu));
    this.http.get<string[]>(`${environment.txtAssets}/contact/contact.json`).subscribe(contenu => this.introContact.next(contenu));

    this.http.get<Personnage[]>(`${environment.txtAssets}/personnages/persos.json`).subscribe(liste => this.personnages.next(liste));
    this.http.get<Canevas[]>(`${environment.txtAssets}/canevas/canevas.json`).subscribe(liste => this.canevas.next(liste));
   }
}
