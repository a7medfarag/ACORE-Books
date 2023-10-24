import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { TuiSvgModule } from '@taiga-ui/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports:[TuiSvgModule]
})
export class ViewComponent {
  @Output() postId = new EventEmitter();
  onViewClick = ()=>this.postId.emit(true);
}
