import { NgIf} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TuiFileLike} from '@taiga-ui/kit';
import {Subject} from 'rxjs';
import {TuiInputFilesModule} from '@taiga-ui/kit';
@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports:[TuiInputFilesModule , ReactiveFormsModule , NgIf]
})
export class InputFileComponent {
  @Output() inputChanged = new EventEmitter<File>();
  @Input() inputControl: FormControl = new FormControl();
  onInputChange = (event:File) =>this.inputChanged.emit(event);
  readonly rejectedFiles$ = new Subject<TuiFileLike | null>();
  readonly loadingFiles$ = new Subject<TuiFileLike | null>();

  onReject(file: TuiFileLike | readonly TuiFileLike[]): void {
      this.rejectedFiles$.next(file as TuiFileLike);
  }

  removeFile(): void {
      this.inputControl.setValue(null);
  }

  clearRejected(): void {
      this.removeFile();
      this.rejectedFiles$.next(null);
  }

 
}
