/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListJokeComponent } from './list-joke.component';

describe('ListJokeComponent', () => {
  let component: ListJokeComponent;
  let fixture: ComponentFixture<ListJokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListJokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
