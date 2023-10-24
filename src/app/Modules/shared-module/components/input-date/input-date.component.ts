import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {TUI_DATE_FORMAT, TUI_DATE_SEPARATOR, TuiDay} from '@taiga-ui/cdk';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputDateModule} from '@taiga-ui/kit';
import { TuiRootModule } from '@taiga-ui/core';
@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
  providers: [
    {provide: TUI_DATE_FORMAT, useValue: 'YMD'},
    {provide: TUI_DATE_SEPARATOR, useValue: '/'},
],
changeDetection: ChangeDetectionStrategy.OnPush,
standalone:true,
imports:[ReactiveFormsModule,TuiInputDateModule , TuiRootModule]
})
export class InputDateComponent {
  @Output() inputChanged = new EventEmitter<string>();
  @Input() inputControl: FormControl = new FormControl(new TuiDay(2023, 0, 1));
  onInputChange(value: string): void {
    this.inputChanged.emit(value);
  }
}

 