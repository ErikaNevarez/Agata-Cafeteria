import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-carrusel',
  imports: [CardComponent],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
  @Input() petArray:Pet[]=[];
  @Input() id_Carrosel:string=''


  fnGetItemsNumber():Pet[]{

    const size = Math.ceil(this.petArray.length/4);
    const array= new Array(size).fill(0);
    return array;
    
  }

  fnGetItems(i:number):any[]{
    const start= i*4;
    const end = start+4
    let subSetPets:any[]=[];
    subSetPets=this.petArray.slice(start, end);

    return subSetPets;
  }

}
