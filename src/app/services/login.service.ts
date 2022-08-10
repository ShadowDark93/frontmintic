import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';
import { LoginModule } from '../models/login/login.module';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private cookies: CookieService) {

  }
  url = 'https://trazaorganica-agrocultiva.herokuapp.com/api/';

  login(user: LoginModule) {
    return this.http.post(this.url+'login', user);
  }

  setToken(token: any) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }

  logout() {
    this.cookies.delete("token");
    return this.http.get(this.url+'logout');
  }
}
