import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MostrarComponent } from "./mostrar/mostrar.component";
import { BuscarComponent } from "./buscar/buscar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MostrarComponent, BuscarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Heroes';
}
