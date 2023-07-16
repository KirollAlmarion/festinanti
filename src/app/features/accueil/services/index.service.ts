import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(private http: HttpClient) { }

  getIndex(): Observable<string[]>{
    return this.http.get<string[]>(`${environment.txtAssets}/accueil/accueil.json`);
  }
}
