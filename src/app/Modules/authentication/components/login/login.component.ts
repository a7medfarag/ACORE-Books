import {LoginService} from './../../services/login.service';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

import {RegexPattern} from 'src/app/Modules/shared-module/Constnats/app-constants';
import {TuiValidationError} from '@taiga-ui/cdk';
import {AuthService} from 'src/app/Modules/shared-module/Services/auth.service';
import {Router} from '@angular/router';
import {ButtonComponent} from 'src/app/Modules/shared-module/components/button/button.component';
import {InputPasswordComponent} from 'src/app/Modules/shared-module/components/input-password/input-password.component';
import {InputTextComponent} from 'src/app/Modules/shared-module/components/input-text/input-text.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ButtonComponent, InputPasswordComponent, InputTextComponent, ReactiveFormsModule]

})
export class LoginComponent implements OnInit {
  btnName: string = 'Sign In';
  loginForm: FormGroup;
  btnAppearence: string = "primary" // for the appearence of the login button
  PassName: string = 'Password';
  emailVaule: string = "Email";
  email: FormControl = new FormControl(
    '',
    Validators.compose([
      Validators.required,
      Validators.pattern(RegexPattern.Email),
    ])
  );
  password: FormControl = new FormControl('', [Validators.required]);

  constructor(private login: LoginService) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }


  submitForm() {
    if (this.loginForm.valid) {
      this.login.loginFn();
      localStorage.setItem('UserEmail', this.email.value)
    }
  }

}
