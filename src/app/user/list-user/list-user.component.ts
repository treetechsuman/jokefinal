import { Component, OnInit } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { Router }   from '@angular/router';

import  './../../rxjs-operators';
import {User} from './../../model/user';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users:User[];
  	selectedUser: User;
    mode = 'Observable';
    errorMessage:String;

  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    this.getJokes();
    this.selectedUser = new User();   
  }

  getJokes() {
    this.userService.getUsers()
                     .subscribe(
                       users =>this.users = users,
                       error =>  this.errorMessage = <any>error);                   
  }
  delete(user: User): void {
    this.userService
    .delete(user.id)
    .subscribe(() => {
      this.users = this.users.filter(h => h !== user);
      if (this.selectedUser === user) { this.selectedUser = null; }
    });
  }
  
}
