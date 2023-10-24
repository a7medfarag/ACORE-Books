import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {TuiSvgModule} from "@taiga-ui/core";

@Component({
  selector: 'app-back-arrow',
  templateUrl: './back-arrow.component.html',
  styleUrls: ['./back-arrow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports:[TuiSvgModule]
})
export class BackArrowComponent {
@Output() closePopups = new EventEmitter();

closePopupsFn = () => this.closePopups.emit(false)
}
