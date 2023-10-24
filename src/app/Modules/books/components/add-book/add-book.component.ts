import { NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AfterContentInit,
  OnInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from 'src/app/Modules/shared-module/components/button/button.component';
import { InputTextComponent } from 'src/app/Modules/shared-module/components/input-text/input-text.component';
import { PaginationComponent } from 'src/app/Modules/shared-module/components/pagination/pagination.component';
import { PlusComponent } from 'src/app/Modules/shared-module/components/plus/plus.component';
import { TableComponent } from 'src/app/Modules/shared-module/components/table/table.component';
import {
  FormControlWrapper,
  IAddBook,
  IBooks,
  ICategory,
  ICategoryType,
  IData,
  IVersionType,
  IVersions,
} from 'src/app/Modules/shared-module/models/interfaces';
import { InputDateComponent } from 'src/app/Modules/shared-module/components/input-date/input-date.component';
import { TuiDay } from '@taiga-ui/cdk';
import { InputNumberComponent } from 'src/app/Modules/shared-module/components/input-number/input-number.component';
import { SingleSelectComponent } from 'src/app/Modules/shared-module/components/single-select/single-select.component';
import { BookService } from '../../services/book.service';
import { TextareaComponent } from 'src/app/Modules/shared-module/components/textarea/textarea.component';
import { InputFileComponent } from 'src/app/Modules/shared-module/components/input-file/input-file.component';
import { SharedToastrService } from 'src/app/Modules/shared-module/Services/sharedToastr.service';
import { BackArrowComponent } from 'src/app/Modules/shared-module/components/back-arrow/back-arrow.component';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    InputTextComponent,
    InputDateComponent,
    NgIf,
    PaginationComponent,
    TableComponent,
    PlusComponent,
    ButtonComponent,
    ReactiveFormsModule,
    InputNumberComponent,
    SingleSelectComponent,
    TextareaComponent,
    InputFileComponent,
    BackArrowComponent
  ],
})
export class AddBookComponent implements OnInit {
  handlers = {
    Title: 'Book Title',
    Author: 'Author Name',
    Category: 'Category',
    Price: 'Book Price',
    Version: 'Book Version',
    OlderVersion: 'Book Older Version',
    Edition: 'Book Edition',
    ISBN: 'Book ISBN',
    Brief: 'Book Brief',
    Cover: 'Book Cover',
    Date: 'Book Release Date',
  };
  editFlag:boolean = true;
  categoriesData: ICategoryType[];
  versionsData: IVersionType[];
  addBook: FormGroup<FormControlWrapper<IAddBook>>;
  addedBook:IBooks
  @Input() allBooks:IBooks;
  @Input() openAddBook: boolean = true;
  @Output() closeAddBook = new EventEmitter();
  @Output() returnedData = new EventEmitter();
  constructor(private fb: FormBuilder, private bookService: BookService , private toastr:SharedToastrService) {}
  ngOnInit(): void {
    this.addBook = this.creatBookForm();
    this.getCategories();
    this.getOlderVersions();
  }
  // api call to get categories
  getCategories() {
    this.bookService.getCategories().subscribe({
      next: (res: ICategory) => {
        return (this.categoriesData = res.data?.Categories);
      },
    });
  }
  // api call to get versions
  getOlderVersions() {
    this.bookService.getVersions().subscribe({
      next: (res: IVersions) => {
        return (this.versionsData = res.data?.Version);
      },
    });
  }
  // When user going to edit the book
  ngAfterContentInit(): void {
    if (! this.allBooks) return;
  this.addBook.controls.Title.setValue(this.allBooks.Title)
  this.addBook.controls.Category.setValue(this.allBooks.Category)
  this.addBook.controls.Price.setValue(this.allBooks.Price)
  this.addBook.controls.Version.setValue(this.allBooks.Version)
  this.addBook.controls.OlderVersion.setValue('V1')
  this.addBook.controls.Edition.setValue("asdasd")
  this.addBook.controls.ISBN.setValue(this.allBooks.ISBN)
  this.addBook.controls.Date.setValue('15/7/2023')
  this.addBook.controls.Brief.setValue(this.allBooks.Brief)
  }

  creatBookForm(): FormGroup<FormControlWrapper<IAddBook>> {
    return this.fb.group<FormControlWrapper<IAddBook>>({
      Title: new FormControl('', [Validators.required]),
      Author: new FormControl('', [Validators.required]),
      Category: new FormControl('', [Validators.required]),
      Price: new FormControl(0, Validators.compose([
        Validators.required,
        Validators.maxLength(2),
      ])),
      Version: new FormControl('', [Validators.required]),
      OlderVersion: new FormControl(''),
      Edition: new FormControl(''),
      ISBN: new FormControl(0,Validators.compose( [
        Validators.required,
        Validators.maxLength(13),
        Validators.minLength(10),
      ])),
      Date: new FormControl(new TuiDay(2023, 0, 1)),
      Brief: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(800),
      ])),
      Cover: new FormControl(File.name,[Validators.required]),
    });
  }

  // To close the component
  closeAddBookFn() {
    this.closeAddBook.emit(false);
  }
  
  addBookFn(){
    if(this.addBook.valid){
      this.addedBook = {
       Author :this.addBook.controls.Author.value,     
       Brief :this.addBook.controls.Brief.value,     
       Category :this.addBook.controls.Category.value,     
       Cover :this.addBook.controls.Cover.value,     
       Price :this.addBook.controls.Price.value,     
       Title :this.addBook.controls.Title.value,     
       Version :this.addBook.controls.Version.value,     
       ISBN :this.addBook.controls.ISBN.value,
       Pages: 10,
       ToRead: true
      }
      this.closeAddBookFn();
      this.toastr.successToaster('Book Added Successfully')
    }
  }
}
