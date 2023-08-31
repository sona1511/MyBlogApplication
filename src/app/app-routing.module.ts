import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AddPostComponent } from './component/add-post/add-post.component';
import { RegisterSuccessComponent } from './component/register-success/register-success.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './component/home/home.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { ViewPostComponent } from './component/view-post/view-post.component';
import { PostDetailsComponent } from './component/post-details/post-details.component';
import { SinglePostdetailsComponent } from './component/single-postdetails/single-postdetails.component';
import { HomeImageComponent } from './component/home-image/home-image.component';

const routes: Routes = [
  {path: '', component: HomeImageComponent}, { path: 'signup', component: RegisterComponent }, {path: 'login', component: LoginComponent}, {path: 'addPost', component: AddPostComponent, canActivate: [AuthGuard]},

  {path: 'register', component: RegisterComponent}, {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},

  {path: 'dashboard', component:UserDashboardComponent, canActivate: [AuthGuard]}, {path: 'viewPost', component: ViewPostComponent, canActivate: [AuthGuard]},

  {path:'posts/:postId', component: PostDetailsComponent, canActivate: [AuthGuard]},
  {path:'post/:postId', component: SinglePostdetailsComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
