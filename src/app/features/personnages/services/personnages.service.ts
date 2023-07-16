import { Injectable } from '@angular/core';
import { ContenuService } from 'src/app/core-services/contenu/contenu.service';
import { Personnage } from '../models/personnage.model';
import { Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonnagesService {

  constructor(private contenu: ContenuService) { }

  getPersonnages(): Observable<Personnage[]>{
    return this.contenu.personnages;
  }

  getPersonnage(id: number): Observable<Personnage|undefined>{
    return this.contenu.personnages.pipe(map(personnages => personnages.at(id)));
  }
}
