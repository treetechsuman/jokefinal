import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';




import {ListJokeComponent} from './joke/list-joke/list-joke.component';
import  {CreateJokeComponent} from './joke/create-joke/create-joke.component';
import  {UpdateJokeComponent} from './joke/update-joke/update-joke.component';

import  {LoginComponent} from './user/login/login.component';
import  {SignupComponent} from './user/signup/signup.component';
import  {ListUserComponent} from './user/list-user/list-user.component';
import  {UpdateUserComponent} from './user/update-user/update-user.component';

import {AuthGuardService} from './services/auth-gard.service';


export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'joke', component: ListJokeComponent },
  { path: 'create-joke', component: CreateJokeComponent},
  { path: 'joke/update-joke/:{id}', component: UpdateJokeComponent },
  
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'users', component: ListUserComponent },
  { path: 'users/update-user/:{id}', component: UpdateUserComponent},
 
];

