import { Component, EventEmitter, input, output } from '@angular/core';

@Component({
  selector: 'app-votaciones',
  imports: [],
  templateUrl: './votaciones.component.html',
  styleUrl: './votaciones.component.css'
})
export class VotacionesComponent {
  @input() candidatos:string[] =[];
  @output() voto: EventEmitter<number> = new EventEmitter<number>

  votoPorCandidato(index:number){
    this.voto.emit(index); 
  }

}
