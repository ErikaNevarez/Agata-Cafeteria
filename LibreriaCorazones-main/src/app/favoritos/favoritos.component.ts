import { Component } from '@angular/core';
import { LibraryService } from '../library.service';
import { Book } from '../book';

@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent {

  myBookList:Book[]=[];

  favorites:number[]=[];

  datosFavoritos:Book[]=[]; 

  constructor(private libraryService:LibraryService){
  }

  ngOnInit(){
    this.loadInitialBooks();
    this.loadFavorites(); 

    this.datosFavoritos=this.myBookList.filter(book=>this.favorites.includes(book.id_book));

    console.log(this.datosFavoritos);
  }

  loadFavorites(){
    this.favorites=this.libraryService.getFavorites();
    console.log(this.favorites);
  }

  loadInitialBooks(){
    this.myBookList=this.libraryService.getBooks();
    console.log(this.myBookList); 
  }

}
