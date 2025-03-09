import { Component, Input } from '@angular/core';
import { Item } from '../../models/items.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() item!:Item ;

}
