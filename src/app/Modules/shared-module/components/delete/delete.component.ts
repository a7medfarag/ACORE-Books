import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import {TuiSvgModule} from '@taiga-ui/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports:[TuiSvgModule]
})
export class DeleteComponent {
  @Output() deleteBook = new EventEmitter();
  onDeleteClick = () => this.deleteBook.emit(event)
}

