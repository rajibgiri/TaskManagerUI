import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {TaskServiceService,ITask} from 'src/app/task-service.service';
import {observable, forkJoin} from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers:[TaskServiceService]
})
export class ViewTaskComponent implements OnInit {

  public taskList :ITask;
  constructor(private modalService: NgbModal, private _taskservice: TaskServiceService) { 
  }

  ngOnInit() {
    this.getTaskList();
  }
  open(content){
    this.modalService.open(content, { centered: true ,size: 'lg' });
  }

  getTaskList(){
    console.log('In first block');
    this._taskservice.getTaskList().subscribe(data => this.taskList = data),
    finalize(()=>{
      //debugger;
      console.log('In Final block');
      console.log(this.taskList);
    })

  }
}
