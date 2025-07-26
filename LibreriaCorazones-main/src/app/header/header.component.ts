import { Component, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  counter!: Signal<number>
  
  constructor(private libraryService:LibraryService){
    this.counter=this.libraryService.getCounter(); 
  }

}
