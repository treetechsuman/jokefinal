import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { rootRouterConfig } from './app.routing';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { JokeComponent } from './joke/joke.component';
import { CreateJokeComponent } from './joke/create-joke/create-joke.component';
import { UpdateJokeComponent } from './joke/update-joke/update-joke.component';
import { ListJokeComponent } from './joke/list-joke/list-joke.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ContactComponent,
    JokeComponent,
    CreateJokeComponent,
    UpdateJokeComponent,
    ListJokeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
