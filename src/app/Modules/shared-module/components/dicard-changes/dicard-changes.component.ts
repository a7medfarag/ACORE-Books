import {ChangeDetectionStrategy, Component, EventEmitter, Output,} from '@angular/core';
import {ButtonComponent} from '../button/button.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-dicard-changes',
  templateUrl: './dicard-changes.component.html',
  styleUrls: ['./dicard-changes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports:[ButtonComponent , CommonModule]
})
export class DicardChangesComponent {
  @Output() deleteConfirmed = new EventEmitter(false);
  @Output() deleteCanceled = new EventEmitter(false);
  primary:string = 'primary'
  button:string = 'button'
  btnName:string = 'Yes, Discard';
  secBtnName:string = 'No, Keep'
  confirmDelete(): void {
    this.deleteConfirmed.emit(true);
  }
  cancelDelete():void{
    this.deleteCanceled.emit(false);
  }
}

