import { Component, OnInit } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { Router }   from '@angular/router';

import  './../../rxjs-operators';
import {Joke} from './../../model/joke';
import { JokeService } from './../../services/joke.service';

@Component({
  selector: 'app-list-joke',
  templateUrl: './list-joke.component.html',
  styleUrls: ['./list-joke.component.css']
})
export class ListJokeComponent implements OnInit {
jokes:Joke[];
  	selectedJoke: Joke;
    mode = 'Observable';
    errorMessage:String;

  constructor(
    private router: Router,
    private jokeService: JokeService) { }

  ngOnInit(): void {
    this.getJokes();
    this.selectedJoke = new Joke();   
  }

  getJokes() {
    this.jokeService.getJokes()
                     .subscribe(
                       jokes =>{
                         this.jokes = jokes;
                         console.log(this.jokes);
                       },
                       error =>  this.errorMessage = <any>error); 
   //console.log(this.errorMessage);                   
  }

  like(joke: Joke){

    this.selectedJoke = joke;
    this.selectedJoke.like =  joke.like + 1;  
    this.jokeService.update(this.selectedJoke)
    .subscribe(
      joke  => {
        this.jokes.push(joke);
        console.log(joke);
        alert('djhkjhd');
      },
      error =>  this.errorMessage = <any>error);  
  }

  disLike(joke: Joke){
    this.selectedJoke = joke;
    this.selectedJoke.disLike =  joke.disLike + 1;  
    this.jokeService.update(this.selectedJoke)
    .subscribe(
      joke  => this.jokes.push(joke),
      error =>  this.errorMessage = <any>error);  
  }

  delete(joke: Joke): void {
    this.jokeService
    .delete(joke.id)
    .subscribe(() => {
      this.jokes = this.jokes.filter(h => h !== joke);
      if (this.selectedJoke === joke) { this.selectedJoke = null; }
    });
  }
  
  onSelect(joke: Joke): void {
    this.selectedJoke = joke;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedJoke.id]);
  }

}
