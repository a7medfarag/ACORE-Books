import { Component, OnInit } from '@angular/core';
import {AuthService} from './Modules/shared-module/Services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ACORE-Books';
  isAuthenticated:boolean;
  constructor(public auth: AuthService) {
  }
  ngOnInit():void{    
    this.auth.isLoggedSubject$.subscribe((data) => {
      this.isAuthenticated = data;
    });
  }
}
