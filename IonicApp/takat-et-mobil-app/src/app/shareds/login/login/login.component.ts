import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from 'src/app/states/login_state/actions';
import { LoginState } from 'src/app/states/login_state/reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent{

  loginForm = new FormGroup({
    email : new FormControl<string>(""),
    password : new FormControl<string>("")
  })
  
  constructor(
    private loginStore : Store<LoginState>,
  ) {}

  login(){
    const formData = this.loginForm.value;
    this.loginStore.dispatch(login({email : formData.email!, password : formData.password! }))
  }
}
