import { TestBed, async } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {TaskBoardComponent} from './task-board/task-board.component';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(async(() => {
    component = new AppComponent();
    TestBed.configureTestingModule({
      imports:[RouterModule],
      declarations: [
        AppComponent,TaskBoardComponent
      ],
    }).compileComponents();
  }));
  it('Should Validate',()=>{
    //component.title ='Test Title';
    //console.log(component.title);
    expect(component).toBeTruthy();
  });
});
