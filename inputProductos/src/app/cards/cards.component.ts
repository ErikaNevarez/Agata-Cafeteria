import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [CurrencyPipe],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

@Input() productName:string='';
@Input() productPrice:number=0;
@Input() productImage:string=''; 

}
