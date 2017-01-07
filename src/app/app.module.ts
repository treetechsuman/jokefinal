import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { CKEditorModule } from 'ng2-ckeditor/lib/index.js';
//import services---------
import { JokeService } from './services/joke.service';
import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-gard.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule, InMemoryBackendService } from 'angular-in-memory-web-api';
import { InMemoryDatabaseService }  from './services/in-memory-database.service';


import { rootRouterConfig } from './app.routing';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { JokeComponent } from './joke/joke.component';
import { CreateJokeComponent } from './joke/create-joke/create-joke.component';
import { UpdateJokeComponent } from './joke/update-joke/update-joke.component';
import { ListJokeComponent } from './joke/list-joke/list-joke.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ContactComponent,
    JokeComponent,
    CreateJokeComponent,
    UpdateJokeComponent,
    ListJokeComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
    ListUserComponent,
    UpdateUserComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig),
    InMemoryWebApiModule.forRoot(InMemoryDatabaseService),

    CKEditorModule,
  ],
  providers: [
    JokeService,
    UserService,
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
