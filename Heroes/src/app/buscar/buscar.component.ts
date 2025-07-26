import { Component } from '@angular/core';
import { Heroe } from '../heroe';
import { HeroeService } from '../heroe.service';

@Component({
  selector: 'app-buscar',
  imports: [],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {

  dato:Heroe={} as Heroe; 
  heroes:Heroe[]=[]; 
  index:number=-1; 
  mensaje:string='';

  constructor(public heroeService:HeroeService){
    this.heroes=heroeService.getHeroes();
  }

    ver(nomh:string):void{
        this.index=this.heroes.findIndex( h => h.nombre===nomh);
        if(this.index!==-1){
          this.dato=this.heroes[this.index];
        }else{
          this.mensaje="Heroe no encontrado"; 
          setTimeout((  )=> {this.mensaje="";} , 2000)
        }
    }



}
