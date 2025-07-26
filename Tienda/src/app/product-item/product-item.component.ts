import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  imports: [CurrencyPipe],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

  @Input() productName:string='';
  @Input() productPrice:number=0;
  @Input() productImage:string=''; 

  @Output() productAdded:EventEmitter<string>=new EventEmitter<string>(); 

  addToCart():void{
    this.productAdded.emit(this.productName)
  }

  }
  


