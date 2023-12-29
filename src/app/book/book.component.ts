import { Component } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  newBookTitle : string = "";
  newBookAuthor : string = "";

  books : Book[] = []

  ngOnInit(): void {
    let savedBooks = localStorage.getItem("books")

    this.books = savedBooks ? JSON.parse(savedBooks) : []
  }

  addBook(){
    let newBook : Book = {
      id: Date.now(),
      title: this.newBookTitle,
      author: this.newBookAuthor
    }

    this.books.push(newBook)

    this.newBookTitle = "";
    this.newBookAuthor = "";

  }

  deleteBook(index: number){
    this.books.splice(index, 1)
    localStorage.setItem("books", JSON.stringify(this.books))
  }
}
