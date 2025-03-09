import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() movie!: Movie; 

  @Output() showInfo=new EventEmitter<Movie>();

  fnCallFather(): void {
    this.showInfo.emit(this.movie); 
  }


}
