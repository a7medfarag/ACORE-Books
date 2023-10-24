import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isOpen:boolean = false;
  isAuthenticated:boolean = false;
  userEmail:string;
  constructor(private router: Router , public auth: AuthService) {
  }
  ngOnInit():void{
    this.auth.isLoggedSubject$.subscribe((data) => {
      this.isAuthenticated = data;
    });
    this.userEmail = localStorage.getItem('UserEmail')
  }
  toggleDropdown = ()=>this.isOpen = !this.isOpen;    
  
  logOutFn() {
    this.router.navigate(['login'])
    this.auth.updateData(false)
    localStorage.removeItem('UserEmail')
    localStorage.removeItem('token')
  }
}
