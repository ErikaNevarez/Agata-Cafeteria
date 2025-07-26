import { Injectable } from '@angular/core';
import { Paciente } from './paciente';
import { ESPECIALISTAS } from './especialistas';
import { Tipo } from './tipo';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  pacientes!:Paciente[]; 
  especialistas: Tipo[]=ESPECIALISTAS;

  constructor() {
   this.pacientes=JSON.parse(localStorage.getItem('data') || '[]' ) ; 
   } 

   getEspecialistas(){
    return this.especialistas; 
   }

   getPacientes(){
    return this.pacientes; 
   }

   agregarPacientes(paciente:Paciente){
      this.pacientes.push(paciente); 
      localStorage.setItem('data', JSON.stringify(this.pacientes) );
   }

   nuevoPaciente(): Paciente{
    return{
      habitacion: 0,
      nombre: '',
      doctor: '',
      diagnostico: '',
      especialidad: 0,  
    }
   }


}
