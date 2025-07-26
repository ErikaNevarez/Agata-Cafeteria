import { Component } from '@angular/core';
import { Heroe } from '../heroe';
import { HeroeService } from '../heroe.service';

@Component({
  selector: 'app-mostrar',
  imports: [],
  templateUrl: './mostrar.component.html',
  styleUrl: './mostrar.component.css'
})
export class MostrarComponent {

heroes:Heroe[]=[]

constructor( public heroeService:HeroeService ){
  this.heroes=heroeService.getHeroes();
}

}
