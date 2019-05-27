import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task.component';
import {HttpClient} from '@angular/common/http';
import {TaskServiceService,ITask} from 'src/app/task-service.service';
import { of, from } from 'rxjs';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let service :TaskServiceService;
  let http :HttpClient;
  let fixture: ComponentFixture<AddTaskComponent>;
  let Task;
  let ParentTask;
  let Priority;
  let StartDate;
  let EndDate;

  let mockTaskService;
  beforeEach(async(() => {
    Task = "Mockup-Task-1";
    ParentTask = "Parent-Mockup-Task-1";
    Priority = 10;
    StartDate = "2019-06-06";
    EndDate = "2019-06-06";

    mockTaskService = jasmine.createSpyObj(['addTask', 'saveTask']);
    
    service = new TaskServiceService(http);
    component = new AddTaskComponent(service);

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AddTaskComponent],
      providers: []
    })
      .compileComponents();
  }));

  describe('validateData', () => {
    it('should validate the Data', () => {
      //mockTaskService.addTask.and.returnValue(of(true));
      component.task = Task;
      component.parentTask = ParentTask;
      component.priority = Priority;
      component.startDate = StartDate;
      component.endDate = EndDate;
      component.validateData();
      expect(component.isError).toBe(false);
    });
  });
  describe('setData', () => {
    it('should set the Data in the Task object', () => {
      component.task = Task;
      component.parentTask = ParentTask;
      component.priority = Priority;
      component.startDate = StartDate;
      component.endDate = EndDate;
      component.setData();
      expect(component.Task.Task).toBe(component.task);
    });
  });


  describe('Add new Task in the Task List',()=>{
    it('Should Add a new Task',()=>{
      component.isError=false;
      component.EditTask =null;
      component.addTask();
      expect(component.isSuccess).toBe(false);
    })      

  });

});
