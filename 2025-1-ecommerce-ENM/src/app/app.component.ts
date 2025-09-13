import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./pages/navbar/navbar.component";
import { HeaderComponent } from "./pages/header/header.component";
import { CarruselComponent } from "./pages/carrusel/carrusel.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeaderComponent, CarruselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
}
