import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'arreglos';
  
  puesto:string="secretaria"; 

  numeros:number[] = [15, 23, 8, 42, 19, 7, 30, 50, 3, 12, 25, 6];

  frutas:string[] = ["Manzana", "Banana", "Uva", "Pera", "Kiwi", "Mango", "Sandía", "Piña", "Cereza", "Melón", "Fresa", "Durazno"];

  empleados:any[] = [
    { nombre: "Luis", puesto: "Gerente", sueldo: 50000, antiguedad: 10 },
    { nombre: "Ana", puesto: "Secretaria", sueldo: 20000, antiguedad: 5 },
    { nombre: "Carlos", puesto: "Vendedor", sueldo: 30000, antiguedad: 3 },
    { nombre: "Marta", puesto: "Vendedor", sueldo: 30000, antiguedad: 2 },
    { nombre: "Pedro", puesto: "Gerente", sueldo: 50000, antiguedad: 12 },
    { nombre: "Sofia", puesto: "Secretaria", sueldo: 20000, antiguedad: 4 },
    { nombre: "Raul", puesto: "Vendedor", sueldo: 30000, antiguedad: 6 },
    { nombre: "Laura", puesto: "Gerente", sueldo: 50000, antiguedad: 8 },
    { nombre: "Diego", puesto: "Vendedor", sueldo: 30000, antiguedad: 3 },
    { nombre: "Lucía", puesto: "Secretaria", sueldo: 20000, antiguedad: 5 },
    { nombre: "Antonio", puesto: "Vendedor", sueldo: 30000, antiguedad: 4 },
    { nombre: "Paula", puesto: "Secretaria", sueldo: 20000, antiguedad: 3 }
  ];

  
  mensaje:string="";
  buscandoFruta(frutaBuscar:string){
    let resultado = this.frutas.filter(f => f === frutaBuscar);

    if (resultado.length > 0) {
     this.mensaje=`${frutaBuscar} está en el arreglo.` ;
    } else {
     this.mensaje=`${frutaBuscar} NO está en el arreglo.` ;
  }
}

  
}
