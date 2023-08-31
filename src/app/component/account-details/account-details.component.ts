import { Component, Input, OnInit } from '@angular/core';
import { RegisterPayload } from 'src/app/model/register-payload';
import { LoginPayload } from 'src/app/model/login-payload';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  public myId: string | null = null;

  public myName: string | null = null;

  public myEmail: string | null = null;

  public myAbout: string | null = null;


  login: LoginPayload = new LoginPayload();
  constructor() { }

  ngOnInit() {
    this.myId = sessionStorage.getItem('userId');
    let name = JSON.stringify(sessionStorage.getItem('name'));
    let actName = name.replace(/[^\w\s]/gi, "");
    this.myName = actName;
    //let email = JSON.stringify(sessionStorage.getItem('email'));
    //let actEmail = email.replace(/[^\w\s]/gi, "");
    //  this.myEmail = actEmail;
    this.myEmail = sessionStorage.getItem('email')
    let about = JSON.stringify(sessionStorage.getItem('about'));
    let actAbout = about.replace(/[^\w\s]/gi, "");
    this.myAbout = actAbout;

  }

}
