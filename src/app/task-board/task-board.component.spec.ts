import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { TaskBoardComponent } from './task-board.component';

describe('TaskBoardComponent', () => {
  let component: TaskBoardComponent;
  let fixture: ComponentFixture<TaskBoardComponent>;

  beforeEach(async(() => {
    component = new TaskBoardComponent();
    TestBed.configureTestingModule({
      imports:[RouterModule],
      declarations: [ TaskBoardComponent ]
    })
    .compileComponents();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(TaskBoardComponent);
   
    
  //   fixture.detectChanges();
  // });

  it('should help  to toggle tab', () => {
    component.toggleTab(true);
    expect(component.isAddTaskSelected).toBe(true);
  });
});
