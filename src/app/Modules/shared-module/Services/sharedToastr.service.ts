import {Injectable} from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root',
})
export class SharedToastrService {
  constructor(private toast: ToastrService) {}

  successToaster(message: string) {
    this.toast.success(message);
  }
  errorToaster(message: string) {
    this.toast.error(message);
  }

}
