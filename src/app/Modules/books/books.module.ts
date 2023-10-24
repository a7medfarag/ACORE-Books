import { NgModule } from '@angular/core';
import { MainBooksComponent } from './components/main-books/main-books.component';
import {BooksRoutingModule} from './books-routing.module';



@NgModule({
  declarations: [
    MainBooksComponent,
  ],
  imports: [
    BooksRoutingModule
  ]
})
export class BooksModule { }
