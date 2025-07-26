import { Component, Input } from '@angular/core';
import { Pet } from '../../models/pet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() pet:Pet | null = null;

  constructor(private router:Router){}

  fnSeePetDetails(): void{
    if(this.pet){
      this.router.navigate(['/pet', this.pet.id_pet]);
    }
  }
  
}
