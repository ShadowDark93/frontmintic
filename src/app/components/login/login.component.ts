import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModule } from 'src/app/models/login/login.module';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private login: LoginService,
    private router: Router,
    private readonly fb: FormBuilder,
  ) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  loginUser() {
    var user = new LoginModule;
    user.email = this.loginForm.get('email')?.value;
    user.password= this.loginForm.get('password')?.value;
    this.login.login(user).subscribe(data => {
      this.login.setToken(data);
      this.router.navigateByUrl('/');
    });
  }

}
