import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { ButtonComponent } from 'src/app/Modules/shared-module/components/button/button.component';
import { IBooks } from 'src/app/Modules/shared-module/models/interfaces';
import { CurrencyPipe } from '@angular/common';
import { DicardChangesComponent } from 'src/app/Modules/shared-module/components/dicard-changes/dicard-changes.component';
import { AddBookComponent } from '../add-book/add-book.component';
import { BackArrowComponent } from 'src/app/Modules/shared-module/components/back-arrow/back-arrow.component';
@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    ButtonComponent,
    CurrencyPipe,
    DicardChangesComponent,
    AddBookComponent,
    BackArrowComponent,
  ],
})
export class ShowBookComponent implements OnChanges {
  imgSrc: string;
  deleteBook: boolean = false;
  deletePopup: boolean = false;
  openEditBook: boolean = false;
  ngOnChanges(changes) {
    console.log(changes);
    this.imgSrc = `../../../../../assets/images/${changes?.ShowedBook?.currentValue?.Cover}`;
  }
  @Input() openViewBook: boolean = false;
  @Input() ShowedBook: IBooks;
  @Output() closeDeleteBook = new EventEmitter();
  addEditBookFn = () => { // to open edit component
    this.openViewBook = false;
    this.openEditBook = true;
  };
  deleteBookFn = () => (this.deletePopup = true);
  //  when user confirms delete
  deleteConfirmed = () => {
    this.openViewBook = false;
    this.closeDeleteBook.emit(true);
  };
  deleteCanceled = () => {
    this.deletePopup = false;
  };
  backEvent = () => {
    this.openViewBook = false;
    this.closeDeleteBook.emit(true);
  }
}
