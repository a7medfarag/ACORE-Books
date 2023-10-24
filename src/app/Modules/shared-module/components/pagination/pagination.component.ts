import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {TuiTablePagination, TuiTablePaginationModule, tuiTablePaginationOptionsProvider} from '@taiga-ui/addon-table';
import {TuiRootModule} from "@taiga-ui/core";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  standalone:true,
  imports: [TuiTablePaginationModule, TuiRootModule],
  providers: [
    tuiTablePaginationOptionsProvider({
      showPages: false,
    }),
  ],
})
export class PaginationComponent {
@Input() page:number = 0;
@Input() size:number = 0;
@Input() totalAmountOfLines = 0;

@Output() changePage = new EventEmitter<TuiTablePagination>();
totalArray: readonly number[] = [10 , 20 , 50 , 100];

  constructor(private cdr: ChangeDetectorRef) {
  }
  changePageData(event: TuiTablePagination) {
    this.changePage.emit(event)
  }
}
