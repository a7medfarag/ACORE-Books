import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input, OnDestroy,
  Output,
} from '@angular/core';
import {TuiDataListModule, TuiDropdownModule, TuiErrorModule, TuiLoaderModule, TuiRootModule,} from '@taiga-ui/core';
import {TuiDataListWrapperModule, TuiSelectModule} from '@taiga-ui/kit';

import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgFor, NgIf} from "@angular/common";
import {GetValidationMessage, ValidationMessageParameters} from "../../Constnats/app-constants";
import {TuiContextWithImplicit, tuiPure, TuiStringHandler, TuiValueChangesModule} from "@taiga-ui/cdk";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-single-select',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TuiDataListModule, ReactiveFormsModule, NgIf, NgFor, TuiDataListWrapperModule, TuiSelectModule, TuiRootModule, TuiErrorModule, FormsModule, TuiValueChangesModule, TuiLoaderModule , TuiDropdownModule],

})
export class SingleSelectComponent<TId> implements AfterViewInit, OnDestroy{
  @Input() items: { id: TId, item: string }[] | null = [];
  @Input() inputControl: FormControl | null;
  @Input() name: string;
  @Input() disableSelect:boolean = false;
  @Output() inputValue = new EventEmitter()
  private sub: Subscription;
  constructor(private cdr: ChangeDetectorRef) {
  }
  get errorList(): string[] {
    if (! this.inputControl) return [];
    let messages: string[] = [];
    const params: ValidationMessageParameters = {
      controlName: this.name
    };
    for (const key of Object.keys(this.inputControl.errors)) {
      messages.push(GetValidationMessage(key, params));
    }
    return messages;
  }

  postValue(event) {
    this.inputValue.emit(event)
  }

  @tuiPure
  stringify(items: readonly { id: TId, item: string }[]): TuiStringHandler<TuiContextWithImplicit<TId>> {
    return ({$implicit}: TuiContextWithImplicit<TId>) => (this.items?.find(x => x.id == $implicit)?.item) || '';
  }

  ngAfterViewInit(): void {
     this.sub =this.inputControl.valueChanges.subscribe(_=> {
      this.cdr.detectChanges()
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
