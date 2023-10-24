import {Injectable} from '@angular/core';
import {AuthService} from '../../shared-module/Services/auth.service';
import {Router} from '@angular/router';

import {SharedToastrService} from "../../shared-module/Services/sharedToastr.service";
import { Books, ViewBooks } from '../../shared-module/Constnats/app-routes-constants';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private auth: AuthService,
    private route: Router,
    private toastrService:SharedToastrService
  ) {}

  loginFn() {
    this.auth.updateData(true);
    this.route.navigate([`/${Books}/${ViewBooks}`])
    this.toastrService.successToaster('You are Loggdin successfully')
    localStorage.setItem('token','LoggedIn')
  }
}
