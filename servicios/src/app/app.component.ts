import { Component } from '@angular/core';
import { ClientesService } from './clientes.service';
import { CommonModule, getLocaleExtraDayPeriodRules } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'servicios';

  letra:string="blue";
  negrita:string= "negrita";

  constructor( public clientesService:ClientesService){

  }
}
