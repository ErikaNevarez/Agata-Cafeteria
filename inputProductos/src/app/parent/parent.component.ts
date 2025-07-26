import { Component } from '@angular/core';
import { CardsComponent } from "../cards/cards.component";

@Component({
  selector: 'app-parent',
  imports: [CardsComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  products=[
    {name:'Chocolate Carlos V', price: 230, image:'/carlosv.png'},
    {name:'Pelón Pelo Rico', price: 289, image:'/pelon.png'},
    {name:'Ruffles botana sabor queso', price: 196, image:'/ruffles.png'}
  ]



}
