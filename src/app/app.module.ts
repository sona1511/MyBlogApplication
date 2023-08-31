import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AddPostComponent } from './component/add-post/add-post.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterSuccessComponent } from './component/register-success/register-success.component';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { SidenavbarComponent } from './component/sidenavbar/sidenavbar.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { ViewPostComponent } from './component/view-post/view-post.component';
import { AccountDetailsComponent } from './component/account-details/account-details.component';
import { HttpClientInterceptor } from './http-client-interceptor';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { PostDetailsComponent } from './component/post-details/post-details.component';
import { AllCommentsComponent } from './component/all-comments/all-comments.component';
import { DeletePostComponent } from './component/delete-post/delete-post.component';
import { SinglePostdetailsComponent } from './component/single-postdetails/single-postdetails.component';
import { HomeImageComponent } from './component/home-image/home-image.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    AddPostComponent,
    RegisterSuccessComponent,
    SidenavbarComponent,
    UserDashboardComponent,
    AccountDetailsComponent,
    HomeComponent,
    ViewPostComponent,
    PostDetailsComponent,
    AllCommentsComponent,
    DeletePostComponent,
    SinglePostdetailsComponent,
    HomeImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot(),
    CommonModule
    


  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
