import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isAddTaskSelected = true;
  isViewTaskSelected = false;
  toggleTab(){
    if (this.isAddTaskSelected) {
      this.isViewTaskSelected =true;
      this.isAddTaskSelected =false;
    }
    else {
      this.isViewTaskSelected =false;
      this.isAddTaskSelected =true;
    }
  }
}
