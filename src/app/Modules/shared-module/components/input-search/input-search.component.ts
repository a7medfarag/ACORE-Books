import {  NgIf, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/kit';
import {TUI_SANITIZER, TuiRootModule, tuiSvgOptionsProvider} from '@taiga-ui/core';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import { whitespaceValidator } from '../../Constnats/app-constants';
@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone:true,
  imports:[ReactiveFormsModule,TuiInputModule ,  NgIf, NgFor , TuiRootModule],
  providers: [
    // A workaround because StackBlitz does not support assets
    tuiSvgOptionsProvider({
      path: 'https://taiga-ui.dev/assets/taiga-ui/icons',
    }),
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer,
    },
  ]
})
export class InputSearchComponent {
  @Output() inputChanged = new EventEmitter<string>();
  @Input() inputControl: FormControl = new FormControl("",[whitespaceValidator]);
  onInputChange(event): void {    
    this.inputChanged.emit(event);
  }
}
