import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import {EditIconComponent} from '../EditIcon/EditIcon.component';
import { ViewComponent } from '../view/view.component';
import { IBooks } from '../../models/interfaces';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports:[ViewComponent , NgIf , NgFor , EditIconComponent , DeleteComponent]
})
export class TableComponent {
  @Output() editBook = new EventEmitter();
  @Output() viewBook = new EventEmitter();
  @Output() deletewBook = new EventEmitter();
  @Input() books:IBooks[] = [];
 

  editBookFn = (bookId:number)=>this.editBook.emit(bookId);    
  viewBookFn = (bookId:number)=>this.viewBook.emit(bookId)
  deleteBookFn = (bookId:number)=>this.deletewBook.emit(bookId)
}
