import { Component } from '@angular/core';
import { LoginPayload } from 'src/app/model/login-payload';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: LoginPayload = new LoginPayload();

  constructor(private authService: AuthService, private router: Router) {

  }


  onSubmit() {

    this.authService.login(this.login).subscribe(data => {
      console.log('login success');
      Swal.fire('Success Done !!!', 'You are successfully logged in', 'success');
      setTimeout(function () {
        window.location.reload();
      }, 200);
      this.router.navigateByUrl('/dashboard');
    }, error => {
      Swal.fire('Error', 'Login Failed', 'error');
    });
  }
  visible: boolean = true;
  changetype: boolean = true;

  viewpass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }


}
