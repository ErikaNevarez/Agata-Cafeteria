import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { Book } from '../book';

@Component({
  selector: 'app-libreria',
  imports: [ReactiveFormsModule],
  templateUrl: './libreria.component.html',
  styleUrl: './libreria.component.css'
})

export class LibreriaComponent {

  bookForm: FormGroup;
  books: Book[]=[];
  selectedImage: string | null=null;

constructor(private fb: FormBuilder) {
  this.bookForm = this.fb.group({
    title: ['',[Validators.required]],
    id_book: ['', [Validators.required]],
    author: ['', [Validators.required]],
    image: [null, [Validators.required]]
  });
}

ngOnInit():void {

  const storageBooks = localStorage.getItem('books');
  this.books=storageBooks ? JSON.parse(storageBooks): [];
}

addBook():void{
  if (this.bookForm.valid && this.selectedImage){
    const newBook: Book = {
      ...this.bookForm.value, 
      image:this.selectedImage
    };

    this.books.push(newBook);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.bookForm.reset();
    this.selectedImage=''; 
  }else{
    this.bookForm.markAllAsTouched(); 
    }
  }


  onFileSelected(event:Event):void {
    const input = event.target as HTMLInputElement;

    if(input.files && input.files.length>0){
      const file=input.files[0];

      this.bookForm.get('image')?.setValue(file);

      this.bookForm.get('image')?.markAsTouched();

      const reader = new FileReader();

      reader.onload= ()=> {
        this.selectedImage=reader.result as string; 
      };

      reader.readAsDataURL(file);
    }else{
      this.selectedImage='';
    }
  }

}
