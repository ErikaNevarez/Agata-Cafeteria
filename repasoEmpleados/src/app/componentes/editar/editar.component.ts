import { Component } from '@angular/core';
import { Personal } from '../../../models/personal';
import { EmpleadosService } from '../../empleados.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {

  trabajador:Personal={
    nombre:'',
    edad:0,
    sueldo:0,
    antiguedad:0,
    foto:'',
    id:0
  };

  mensajeExito: string=""; 
  esFemenino:boolean=false; 
  
  constructor(private servicio : EmpleadosService,  private router: Router, private route: ActivatedRoute ){}

  ngOnInit(): void{
    this.route.paramMap.subscribe( params => {
      const id=Number(params.get('id'));  //el id llega aqui como texto y este Number lo convierte a numero
      const encontrado=this.servicio.getById(id);
      if (encontrado!==null){
        this.trabajador={... encontrado}; //estos tres puntitos se llaman operador de spraid, es decir, genera una copia de ese objeto con una direccion de memoria totalmente diferente
      }else{
        this.mensajeExito="Empleado no encontrado";
      }
    });
  } //este es el final del ngOnInit

actualizar():void{
  this.servicio.update(this.trabajador); 
  this.mensajeExito= `Empleado con id ${this.trabajador.id} actualizado!!!`; 
  setTimeout( () => {
    this.mensajeExito=""; 
    this.router.navigate(['/actualizar']); 
  }, 3000);

} // fin 

  asignarFotoAleatoria(){
    let genero;
    const id=Math.floor(Math.random()*100);
    if(this.esFemenino){
      genero='women';
    }else{
      genero='men'; 
    }
    this.trabajador.foto=`https://randomuser.me/api/portraits/${genero}/${id}.jpg`;
    }


}
