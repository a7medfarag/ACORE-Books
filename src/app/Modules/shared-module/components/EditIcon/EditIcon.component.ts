import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {TuiSvgModule} from '@taiga-ui/core';

@Component({
  selector: 'app-EditIcon',
  templateUrl: './EditIcon.component.html',
  styleUrls: ['./EditIcon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports:[TuiSvgModule]
})
export class EditIconComponent {
  @Output() openPopup = new EventEmitter();
  onEditClick = ()=> this.openPopup.emit(true)
}
