import { Component } from '@angular/core';
import { Paciente } from '../../paciente';
import { Tipo } from '../../tipo';
import { PacientesService } from '../../pacientes.service';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-alta',
  imports: [FormsModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {

  paciente!: Paciente; 
  especialistas!:Tipo[];

  constructor( public pacientesService:PacientesService ){ }

  ngOnInit(){
    this.paciente=this.pacientesService.nuevoPaciente();
    this.especialistas=this.pacientesService.getEspecialistas(); 
  }


  
nuevoPaciente():void{
    this.pacientesService.agregarPacientes(this.paciente); 
    alert("Paciente ingresado");
    this.paciente=this.pacientesService.nuevoPaciente();
}



}
