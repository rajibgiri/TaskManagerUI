import { SearchFilterPipe } from './search-filter.pipe';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TaskServiceService,ITask} from 'src/app/task-service.service';
import { from, Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';

describe('SearchFilterPipe', () => {
  let pipe :SearchFilterPipe;
  let _taskservice: TaskServiceService;
  let taskListobs :Observable<ITask[]>;
  let taskList :ITask[];
  beforeEach(()=>{
    TestBed.configureTestingModule({
        imports:[HttpClientTestingModule],
        providers:[_taskservice]
    });
    pipe =new SearchFilterPipe();
    //_taskservice = TestBed.get(TaskServiceService);
    //taskListobs = _taskservice.getTaskList();
    //taskList = taskListobs;
    //_taskservice.getTaskList<ITask[]>().subscribe((data :ITask[])=> taskList = data);
  });


  it('Search for a task and check the count', () => {
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

    expect(pipe.transform( TASKLIST ,"Task-123",null,null,null,0,30).length).toBe(1);
  });
});

