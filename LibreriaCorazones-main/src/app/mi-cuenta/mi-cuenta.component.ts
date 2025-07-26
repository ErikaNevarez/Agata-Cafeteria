import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-cuenta',
  imports: [],
  templateUrl: './mi-cuenta.component.html',
  styleUrl: './mi-cuenta.component.css'
})
export class MiCuentaComponent {

  user={ firstName:"Juan", lastName:"Perez", email:"juan.perez@example.com", username:"juanp", imageUrl: "/chico.jpg", pasatiempo:"surf"
  }; 


  
}
