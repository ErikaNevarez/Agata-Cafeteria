import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'votaciones';

  nombresCandidatos: string[]=['Alexa Sarom', 'Eliseo Barraza', 'Elias Campos']; 

  candidato1Votos: number=0;
  candidato2Votos: number=0;
  candidato3Votos: number=0;

  result:string=''; 
  showCounters: boolean=false; 

  onVote(candidatoIndex:number){
    switch(candidatoIndex) {
      case 0: 
      this.candidato1Votos++;
      break;
      case 1: 
      this.candidato2Votos++;
      break;
      case 2: 
      this.candidato3Votos++;
      break;      
    }
    this.showCounters=true; 
  }

  finVotacion(){
    if(this.candidato1Votos===0 && this.candidato2Votos===0 && this.candidato3Votos===0){
    this.result='No se ha registrado ningún voto.'; 
    return; 
  }
  const maxVotes=Math.max(this.candidato1Votos, this.candidato2Votos, this.candidato3Votos);

  let winners:string=''; 
  let countWinners=0;

  if (this.candidato1Votos===maxVotes){
    winners += this.nombresCandidatos[0]; 
    countWinners++; 
  }

  if(this.candidato2Votos===maxVotes){
    winners+=(countWinners>0?',': '') + this.nombresCandidatos[1];
    countWinners++;
  }
  if (this.candidato3Votos===maxVotes) {
    winners+=(countWinners>0?', ' : '')+this.nombresCandidatos[2];
    countWinners++; 
  }

  if (countWinners>1){
    this.result='Empate entre: ${winners} von ${maxVotes} votos cada uno.';
  }else{
    this.result='¡El ganador es ${winners} con ${maxVotes} votos!'; 
  }    
  }
 

  }
  

