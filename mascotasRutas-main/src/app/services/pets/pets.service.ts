import { Injectable } from '@angular/core';
import { Pet } from '../../models/pet';
import pets from '../../data/pets.json'; 


@Injectable({
  providedIn: 'root'
})
export class PetsService {

  pets:Pet[]=pets; 

  constructor() {}

  fnGetLostPets():Pet[]{
    return this.pets.filter(pet=>pet.state=='perdido');
  }

  fnGetHomeLessPets():Pet[]{
    return this.pets.filter(pet=>pet.state=='en busca de hogar');
  }

  fnGetFound():Pet[]{
    return this.pets.filter(pet=>pet.state=='adoptado');
  }
  
  fnGetPetbyId(id:number):Pet | null{
    const pet= this.pets.find(pet=>pet.id_pet==id);
    if (pet) {
      return pet;
    }
    else{
      return null;
    }
  }

}
