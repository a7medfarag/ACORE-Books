import { NgIf } from '@angular/common';
import {TuiTablePagination} from "@taiga-ui/addon-table";
import { FormControl } from '@angular/forms';
import { AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { InputSearchComponent } from 'src/app/Modules/shared-module/components/input-search/input-search.component';
import { IBooks, IData } from "src/app/Modules/shared-module/models/interfaces";
import { BookService } from "../../services/book.service";
import { PaginationComponent } from "src/app/Modules/shared-module/components/pagination/pagination.component";
import { TableComponent } from "src/app/Modules/shared-module/components/table/table.component";
import { PlusComponent } from "../../../shared-module/components/plus/plus.component";
import { ButtonComponent } from "src/app/Modules/shared-module/components/button/button.component";
import { AddBookComponent } from "../add-book/add-book.component";
import { ShowBookComponent } from '../show-book/show-book.component';
import { DicardChangesComponent } from 'src/app/Modules/shared-module/components/dicard-changes/dicard-changes.component';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [InputSearchComponent , NgIf , PaginationComponent , TableComponent , PlusComponent , ButtonComponent , AddBookComponent , ShowBookComponent , DicardChangesComponent]
})
export class ViewBooksComponent implements OnInit {
  serachInput: FormControl = new FormControl('');
  pageNumber: number = 0;
  pageSize: number = 3;
  addBook:boolean = false;
  editBook:boolean = false;
  deleteBook:boolean = false;
  totalAmountOfData: number = 0;
  PaginationData = {
    pageIndex: this.pageNumber,
    pageSize: this.pageSize,
  }; 
  deletedBookId:number;
  booksData:IBooks[];
  editedBook:IBooks
  paginatedBooks:IBooks[] = [];
  deletePopup:boolean = false;
  constructor(private bookService:BookService){}
  ngOnInit(): void {
    this.getAllBooks();
  }

  getSearchValue(event) {
    if(event.target.value.trim() === "") this.getAllBooks();
    else{
      this.booksData =  this.booksData.filter(book=> (book.Author.toLowerCase() === event.target.value.toLowerCase() || book.Title.toLowerCase() === event.target.value.toLowerCase()))   
      if(this.booksData.length == 0){
        this.getAllBooks();
      } 
    }
  }
  get paginatedData(): IBooks[] {
    const startIndex = this.PaginationData.pageIndex * this.pageSize;    
    return this.booksData?.slice(startIndex, startIndex + this.pageSize);
  }
  getAllBooks(event?: TuiTablePagination) {
    this.PaginationData.pageIndex = event? event.page : 0
    return this.bookService.getAllBooks().subscribe({
      next: (res: IData<IBooks>) => {        
        this.booksData = res.data.Books;
        // this value if i call api and implement the pagination
        this.totalAmountOfData = this.booksData?.length 
        return this.booksData
      }
    })
    
  }
  openAddComp = (event) => {    
    this.editedBook = this.booksData[event]
    this.addBook = true;
  }
  viewBookComp = (event)=>{
    this.editedBook = this.booksData[event]
    this.deleteBook = true;
  }
  closeAddBook = (event) => this.addBook = event;
  closeViewBook = () => this.deleteBook = false;
  deleteBookFn = (event) =>{
    this.deletedBookId = event
    this.deletePopup = true
  }
  deleteConfirmed = () =>{
    this.booksData.splice(this.deletedBookId, 1);
    this.deletePopup = false;
    this.totalAmountOfData = this.booksData?.length 
    return this.booksData
  }
  deleteCanceled = () => this.deletePopup = false;
}
