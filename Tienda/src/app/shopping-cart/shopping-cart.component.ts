import { Component } from '@angular/core';
import { Tenis } from '../tenis';
import { ProductItemComponent } from "../product-item/product-item.component";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  imports: [ProductItemComponent, CurrencyPipe],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {

  cartItems:string[]=[]; 
  total:number=0;

  products:Tenis[]=[
    {name:"tenis negro/blanco", price:1900, image: "/tenis1.png"}, 
    {name:"tenis rosa", price:1750, image: "/tenis2.png"}, 
    {name:"tenis azul marino", price:1200, image: "/tenis3.png"}, 
    {name:"tenis gris", price:1400, image: "/tenis4.png"}, 
    {name:"tenis negros", price:1500, image: "/tenis5.png"}, 
    {name:"tenis sport negro", price:1300, image: "/tenis6.png"},
  ]

  onProductAdded(product:string):void{
    this.cartItems.push(product); 
    let indice=this.products.findIndex( (p)=> p.name === product );
    this.total=this.total+this.products[indice].price;
  }

}
