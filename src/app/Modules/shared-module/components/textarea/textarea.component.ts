import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule
} from "@angular/forms";
import { TuiTextareaModule} from "@taiga-ui/kit";
import {NgFor, NgIf} from "@angular/common";
import {TuiErrorModule, TuiRootModule} from "@taiga-ui/core";
import {GetValidationMessage, ValidationMessageParameters} from "../../Constnats/app-constants";

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  standalone:true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgFor,
    NgIf,
    TuiErrorModule,
    TuiRootModule,
    TuiTextareaModule
  ]
})
export class TextareaComponent {
  @Input() inputControl:FormControl = new FormControl()
  @Input() name:string = '';
  @Input() value: string = "";
  @Output() inputValue = new EventEmitter()
  submitValue(event){
    this.inputValue.emit(event.target.value)
  }
  get errorList(): string[]{
    let messages: string[] = [];
    const params: ValidationMessageParameters = {
      controlName: this.name
    };
    
    for (const key of Object.keys(this.inputControl.errors)) {
      messages.push(GetValidationMessage(key,params));

    }
    return  messages;
  }
}
