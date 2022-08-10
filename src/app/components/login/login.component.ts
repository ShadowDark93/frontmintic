import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    /* private loginService: LoginService, */
    /* private router: Router */
    private route: ActivatedRoute,
  ) {

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  loginUser() {
    var user = new LoginModule;
    user.email = this.loginForm.get('email')?.value;
    user.password = this.loginForm.get('password')?.value;
     /* this.loginService.login(user).subscribe(data => {
      this.loginService.setToken(data);
      this.router.navigateByUrl('/');
    }); */
  }

}
