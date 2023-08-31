import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { RegisterPayload } from '../model/register-payload';
import { LoginPayload } from '../model/login-payload';
import { JwtAutResponse } from '../model/jwt-aut-response';
import { LocalStorageService } from 'ngx-webstorage';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:8022/api/v1/auth/';

  constructor(private httpClient: HttpClient, private localStoraqeService: LocalStorageService) {
  }

  

  register(registerPayload: RegisterPayload): Observable<any> {
    return this.httpClient.post(this.url +'register', registerPayload /* {
      "id": 13,
      "name": "chandann",
      "password" : "121323",
      "email": "chandann@gmail.com",
      "about": "bhootni"
  } */);
  } 


  login(loginPayload: LoginPayload): Observable<boolean> {
    return this.httpClient.post<JwtAutResponse>(this.url + 'login', loginPayload).pipe(map
      (data => {
      this.localStoraqeService.store('token', data.token);
      this.localStoraqeService.store('user', data.user);
      sessionStorage.setItem("object", JSON.stringify(data));
      sessionStorage.setItem("userId", JSON.stringify(data.user.userId));
      sessionStorage.setItem("name", JSON.stringify(data.user.name));
      sessionStorage.setItem("email", JSON.stringify(data.user.email));
      sessionStorage.setItem("about", JSON.stringify(data.user.about));
      return true;
    }));
  }

  isAuthenticated(): boolean {
    return this.localStoraqeService.retrieve('token') != null;
  }

  logout() {
    this.localStoraqeService.clear('token');
    this.localStoraqeService.clear('user');
  }

}
