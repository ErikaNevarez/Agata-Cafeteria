import { Component, Input } from '@angular/core';
import { Item } from '../../models/items.model';
import { CardComponent } from '../card/card.component';
import { CarruselConfig } from '../../models/CarruselConfig.model';

@Component({
  selector: 'app-carusel',
  imports: [CardComponent],
  templateUrl: './carusel.component.html',
  styleUrl: './carusel.component.css',
})
export class CaruselComponent {

  @Input() carruselConfig!: CarruselConfig;

  fnGetItemsNumber(): Item[] {
    //completar
    if (this.carruselConfig.numberItems > 4) {
      this.carruselConfig.numberItems = 4;
    }

    this.carruselConfig.numberItems = this.carruselConfig.numberItems > 4 ? 4 : this.carruselConfig.numberItems;
    this.carruselConfig.numberItems = this.carruselConfig.numberItems < 1 ? 1 : this.carruselConfig.numberItems;
    const size = Math.ceil(
      this.carruselConfig.items.length / this.carruselConfig.numberItems
    );

    const array = new Array(size).fill(0);

    return array;

  }






  fnGetItems(i: number): any[] {
    //completar
    const start = i * this.carruselConfig.numberItems;

    const end = start + this.carruselConfig.numberItems;

    let subArray: any[] = [];
    subArray = this.carruselConfig.items.slice(start, end);

    return subArray;    //Sustituye esta linea por la correcta, lo deje asi, para evitar el error.
  }

}
