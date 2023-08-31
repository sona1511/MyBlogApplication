import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { RegisterPayload } from 'src/app/model/register-payload';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {



  register: RegisterPayload = new RegisterPayload();


  constructor(private authService: AuthService, private router: Router) {

  }
  onSubmit() {
    this.authService.register(this.register).subscribe(data => {
      console.log('register succes');
      Swal.fire('Register Done !!!', 'You are successfully registered', 'success');
      this.router.navigateByUrl('/login');
    }, error => {
      Swal.fire('Error', 'Register Failed', 'error');
    });
  }

  visible: boolean = true;
  changetype: boolean = true;

  viewpass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }


}