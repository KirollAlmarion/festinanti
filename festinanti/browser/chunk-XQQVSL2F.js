import{f as s,n as o,nb as e,q as a,sa as c}from"./chunk-QF2CGPEP.js";var x=(()=>{let i=class i{constructor(r){this.http=r,this.introAccueil=new s(["Bienvenue!"]),this.introCanevas=new s(["Nos \u0153uvres"]),this.introEquipe=new s(["Voici les joyeux drilles!"]),this.introPersonnages=new s(["La commedia dell'arte met en sc\xE8ne une quinzaine d'arch\xE9types."]),this.introActualites=new s(["Au programme..."]),this.introPartenaires=new s(["Notre r\xE9seau."]),this.introContact=new s(["Comment nous joindre."]),this.personnages=new s([]),this.canevas=new s([]),this.http.get(`${e.txtAssets}/accueil/accueil.json`).subscribe(t=>this.introAccueil.next(t)),this.http.get(`${e.txtAssets}/canevas/intro.json`).subscribe(t=>this.introCanevas.next(t)),this.http.get(`${e.txtAssets}/equipe/equipe.json`).subscribe(t=>this.introEquipe.next(t)),this.http.get(`${e.txtAssets}/personnages/personnages.json`).subscribe(t=>this.introPersonnages.next(t)),this.http.get(`${e.txtAssets}/actualites/actualites.json`).subscribe(t=>this.introActualites.next(t)),this.http.get(`${e.txtAssets}/partenaires/partenaires.json`).subscribe(t=>this.introPartenaires.next(t)),this.http.get(`${e.txtAssets}/contact/contact.json`).subscribe(t=>this.introContact.next(t)),this.http.get(`${e.txtAssets}/personnages/persos.json`).subscribe(t=>this.personnages.next(t)),this.http.get(`${e.txtAssets}/canevas/canevas.json`).subscribe(t=>this.canevas.next(t))}};i.\u0275fac=function(t){return new(t||i)(a(c))},i.\u0275prov=o({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();export{x as a};
