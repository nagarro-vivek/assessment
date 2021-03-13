import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  isSubmitted  =  false;

  constructor(  private router: Router, private formBuilder: FormBuilder, private authService: AuthService,) {
    this.loginForm  =  this.formBuilder.group({
      email: new FormControl ('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl ('', [Validators.required,Validators.minLength(6), Validators.maxLength(20)])
    });
  }

  get formControls() { return this.loginForm.controls; }


  login = () => {
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.login(this.loginForm.value);
    // this.store.dispatch(new Login());
    this.router.navigateByUrl('/dashboard');
  }

}

