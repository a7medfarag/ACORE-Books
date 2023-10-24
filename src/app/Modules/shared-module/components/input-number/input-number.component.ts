import { TuiRootModule } from '@taiga-ui/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component , EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {TuiInputNumberModule} from '@taiga-ui/kit';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import {tuiNumberFormatProvider} from '@taiga-ui/core';
import {TuiErrorModule} from '@taiga-ui/core';
import { NgFor, NgIf } from '@angular/common';
import { GetValidationMessage, ValidationMessageParameters } from '../../Constnats/app-constants';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports:[ReactiveFormsModule , TuiInputNumberModule , TuiRootModule , TuiCurrencyPipeModule ,TuiErrorModule , NgIf , NgFor],
  providers: [tuiNumberFormatProvider({decimalSeparator: '.', thousandSeparator: ',' })]
})
export class InputNumberComponent {
  @Output() inputChanged = new EventEmitter<string>();
  @Input() inputControl: FormControl = new FormControl();
  @Input() name:string;
  onInputChange = (event): void => this.inputChanged.emit(event.target.value);

  get errorList(): string[]{
    let messages: string[] = [];
    const params: ValidationMessageParameters = {
      controlName: this.name,
      length:this.inputControl.errors?.maxlength?.requiredLength
    };
    for (const key of Object.keys(this.inputControl.errors)) {
      console.log(this.inputControl.errors);
      
      if(key =='max'){
        messages.push(GetValidationMessage(key,params,this.inputControl.errors?.max?.requiredLength));
      }
      else{
        messages.push(GetValidationMessage(key,params));
      }

    }    
    return  messages;
  }
}
