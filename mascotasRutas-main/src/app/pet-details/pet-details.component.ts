import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetsService } from '../services/pets/pets.service';
import { Pet } from '../models/pet';

@Component({
  selector: 'app-pet-details',
  imports: [],
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css'
})
export class PetDetailsComponent {

  pet:Pet | null= null; 

  constructor(private petsService:PetsService , private route: ActivatedRoute){}
  ngOnInit(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pet=this.petsService.fnGetPetbyId(id); 
  }

}
