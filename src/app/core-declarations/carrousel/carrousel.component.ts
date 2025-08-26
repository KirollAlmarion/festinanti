import { Component, Input, OnInit, signal } from '@angular/core';
import { interval, take, repeat } from 'rxjs';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carrousel[emplacement] [nombre]',
  template: `
  <figcaption>
    @for (photo of photos; track $index){
      <img
      [srcset]="photo.srcset"
      sizes="(max-width: 600px) 240px, 498px"
      [src]="photo.src"
      [style]="{opacity: $index === actuel()-1? 1: 0}" />
    }
  </figcaption>
  `,
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  @Input() emplacement!: string;
  @Input() nombre = 10;

  racine = environment.imgAssets;
  source = interval(5000);
  actuel = signal(1);
  photos : {src: string, srcset: string}[] = [];

  ngOnInit(): void {
    for (let i = 1; i <= this.nombre; i++){
      this.photos[i] = {
        src : `${this.racine}/${this.emplacement}/${i}.png`,
        srcset: `${this.racine}/${this.emplacement}/${i}-petit.png 240w, ${this.racine}/${this.emplacement}/${i}.png 498w`
      };
    }
    this.photos.shift();
    console.log(this.photos);
    this.source.pipe(take(this.nombre), repeat()).subscribe(val => this.defile(val));
  }

  defile(value: number){
    this.actuel.set(value + 1);
  }

}
