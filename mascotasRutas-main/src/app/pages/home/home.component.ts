import { Component } from '@angular/core';
import { CarruselComponent } from '../../components/carrusel/carrusel.component';
import { FormComponent } from '../../components/form/form.component';
import { PetsService } from '../../services/pets/pets.service';
import { Pet } from '../../models/pet';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { faSearch,faHeart,faHouse } from '@fortawesome/free-solid-svg-icons';
import { TestimonialComponent } from '../../components/testimonial/testimonial.component';

@Component({
  selector: 'app-home',
  imports: [CarruselComponent, FormComponent, FontAwesomeModule, TestimonialComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  
  faSearch=faSearch;
  faHeart=faHeart;
  faHouse=faHouse;
  
  randomImg:string[]=[];
  petArray:Pet[]=[];

  constructor(private petsService:PetsService){
  }
  
  fnGetLostPets():Pet[]{
    console.log(this.petsService.fnGetLostPets())
    return this.petsService.fnGetLostPets()
  }
  fnGetHomeLessPets():Pet[]{
    console.log(this.petsService.fnGetHomeLessPets())
    return this.petsService.fnGetHomeLessPets()
  }
  fnGetFound():Pet[]{
    console.log(this.petsService.fnGetFound())
    return this.petsService.fnGetFound();
  }
  fnGetPetbyId(id:number):Pet | null{
    return this.petsService.fnGetPetbyId(id);
  }

}
