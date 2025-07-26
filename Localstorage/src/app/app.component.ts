import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AltaComponent } from "./pacientes/alta/alta.component";
import { ListarComponent } from "./pacientes/listar/listar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AltaComponent, ListarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Localstorage';
}
