import { TestBed, inject } from '@angular/core/testing';

import { TaskServiceService,ITask } from './task-service.service';
import { of } from 'rxjs';

const taskservice = new TaskServiceService(null);
const TASKLIST :ITask[] =[
  {"TaskID":1,"Task":"Task-1","ParentID":7,"ParentTask":"ABCDEFG","StartDate":"2019-03-11T00:00:00","EndDate":"2019-03-25T00:00:00","Priority":11,"IsClosed":false},
  {"TaskID":2,"Task":"Task-2","ParentID":0,"ParentTask":null,"StartDate":"2018-04-01T00:00:00","EndDate":"2018-04-30T00:00:00","Priority":8,"IsClosed":false},
  {"TaskID":4,"Task":"Task-3","ParentID":0,"ParentTask":null,"StartDate":"2018-06-01T00:00:00","EndDate":"2018-06-14T00:00:00","Priority":6,"IsClosed":false},
  {"TaskID":5,"Task":"Task-19","ParentID":0,"ParentTask":null,"StartDate":"2019-05-01T00:00:00","EndDate":"2019-05-15T00:00:00","Priority":8,"IsClosed":false},
  {"TaskID":6,"Task":"Task-900","ParentID":6,"ParentTask":"ABCDE","StartDate":"2019-05-01T00:00:00","EndDate":"2019-05-15T00:00:00","Priority":7,"IsClosed":false},
  {"TaskID":7,"Task":"Task-111","ParentID":2,"ParentTask":"ABCD","StartDate":"2019-05-11T00:00:00","EndDate":"2019-05-25T00:00:00","Priority":6,"IsClosed":false},
  {"TaskID":8,"Task":"Task-29657","ParentID":3,"ParentTask":"ABC","StartDate":"2019-05-01T00:00:00","EndDate":"2019-05-15T00:00:00","Priority":8,"IsClosed":false},
  {"TaskID":9,"Task":"Task-123","ParentID":1,"ParentTask":"ABC","StartDate":"2019-05-08T00:00:00","EndDate":"2019-05-31T00:00:00","Priority":14,"IsClosed":false}
];

const fakeTask ={"TaskID":1,"Task":"Task-1","ParentID":7,"ParentTask":"ABCDEFG","StartDate":"2019-03-11T00:00:00","EndDate":"2019-03-25T00:00:00","Priority":11,"IsClosed":false};

const fakeTaskService = jasmine.createSpyObj('taskService',['getTaskList','saveTask','updateTask']);

describe('TaskServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskServiceService]
    });
    TaskServiceService
  });

  it('Test Sevice Get Task List',()=>{
    //const spy = spyOn(taskservice,'getTaskList').and.returnValue(of([TASKLIST]));
    const spy = fakeTaskService.getTaskList.and.returnValue(of([TASKLIST]));
    let users = fakeTaskService.getTaskList();
    expect(spy).toHaveBeenCalled();  
  })

  it('Test Sevice Add new Task in the List',()=>{
    //const spy = spyOn(taskservice,'saveTask').and.returnValue(of([TASKLIST]));
    const spy = fakeTaskService.getTaskList.and.returnValue(of([TASKLIST]));
    fakeTaskService.saveTask(fakeTask);
    expect(spy).toHaveBeenCalled();  
  })

  it('Test Sevice update Task in the List',()=>{
    //const spy = spyOn(taskservice,'updateTask').and.returnValue(of([TASKLIST]));
    const spy = fakeTaskService.getTaskList.and.returnValue(of([TASKLIST]));
    fakeTaskService.updateTask(fakeTask);
    expect(spy).toHaveBeenCalled();  
  })
  it('Test Sevice Delete Task from the List',()=>{
    //const spy = spyOn(taskservice,'deleteTask').and.returnValue(of([TASKLIST]));
    const spy = fakeTaskService.getTaskList.and.returnValue(of([TASKLIST]));
    fakeTaskService.saveTask(fakeTask);
    expect(spy).toHaveBeenCalled();  
  })
  // it('should be created', inject([TaskServiceService], (service: TaskServiceService) => {

  //   expect(service).toBeTruthy();
  // }));
});
