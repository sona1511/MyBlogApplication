import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User =  new User();
  public myName: string | null = null;

  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    let name = JSON.stringify(sessionStorage.getItem('name'));
    let actName = name.replace(/[^\w\s]/gi, "");
    this.myName = actName;

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);

    
  }

}
