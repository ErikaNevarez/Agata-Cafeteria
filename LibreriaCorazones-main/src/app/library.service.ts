import { Injectable, signal } from '@angular/core';
import { Book } from './book';
import booksData from './books.json';   

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  books : Book[] = booksData; 
  private searchResults = this.books; // Estado inicial con todos los libros

  private count = signal<number>(0);

  getCounter(){
    return this.count;
  }

  incremento(){
    this.count.update(n=> n+1);
  }

  decremento(){
    this.count.update(n=> n-1);
  }

  reset(){
    this.count.set(0); 
  }

  constructor() { }

// obtiene la lista de los libros
  getBooks(){
    return this.books;
  }

  searchBooks(term:string):Book[]{
      const filteredBooks=this.books.filter(
         (book)=>
            book.title.toLowerCase().includes(term.toLowerCase()) ||
         book.author.toLowerCase().includes(term.toLowerCase())
      );
      this.searchResults=filteredBooks;
      return this.searchResults;
  }

  
  getFavorites():number[]{
    const favoritesString = localStorage.getItem('favorites');
      if(favoritesString===null) {
       return [] ;
      }
    const favorites = JSON.parse(favoritesString);
    const length = favorites.length;
    this.count.update(n=> length);
  return favorites;
  }

  addToFavorites(id:number){
      this.incremento();
      const favorites= this.getFavorites();
      favorites.push(id);
      localStorage.setItem('favorites', JSON.stringify(favorites));

  }

  removeFromFavorites(id:number){
    this.decremento();
    const favorites= this.getFavorites();
    const updateBooks= favorites.filter(id_book =>  id_book!==id);
    localStorage.setItem('favorites', JSON.stringify(updateBooks));
  }
  
   
}
