import { Component } from '@angular/core';
import { Paciente } from '../../paciente';
import { PacientesService } from '../../pacientes.service';

@Component({
  selector: 'app-listar',
  imports: [],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {

pacientes!:Paciente[]; 

constructor( public  pacientesService:PacientesService  ){}

ngOnInit(){
    this.pacientes=this.pacientesService.getPacientes();
}



}
