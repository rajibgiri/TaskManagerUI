import { Component, OnInit,Input } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {TaskServiceService,ITask} from 'src/app/task-service.service';
import * as moment from 'moment';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  providers:[TaskServiceService]
})
export class AddTaskComponent implements OnInit {

  constructor(private _taskservice: TaskServiceService) { }
  taskID : number=0;
  task:string = "";
  parentTaskID:number=0;
  parentTask:string = "";
  priority:number = 0;
  startDate:string;
  endDate:string;
  Task:ITask ={} as any;
  formTitle ="Add ";
  errorMessage:string = "";
  successMessage:string ="";
  isError:boolean = false;
  isSuccess:boolean = false;

  @Input() EditTask: ITask[];

  ngOnInit() {
    if (!this.EditTask) {
      return;
    }
    if (this.EditTask.length>0) {
      this.formTitle ="Update ";
      let selectedTask = this.EditTask[0];
      this.taskID =selectedTask.TaskID;
      this.task = selectedTask.Task;
      this.parentTaskID =selectedTask.ParentID;
      this.parentTask = selectedTask.ParentTask;
      this.priority = selectedTask.Priority;
      this.startDate =  moment(selectedTask.StartDate).format("YYYY-MM-DD");
      this.endDate = moment(selectedTask.EndDate).format("YYYY-MM-DD");
    } else {
    }
  }

  addTask(){
   
    this.validateData();
    if (this.isError) {
      return;
    } 
    else 
    {
      if (!this.EditTask) 
      {
        this.setData();
        let result =this._taskservice.saveTask(this.Task);
        if ( result)
        {
        this.isSuccess =true;
        this.successMessage =successMessage.saved;
        this.resetForm(false);
        }
      }
      else
      {
        this.setData();
        let result =this._taskservice.updateTask(this.Task);
        if ( result)
        {
        this.isSuccess =true;
        this.successMessage =successMessage.updated;
        setTimeout(()=>{ 
          this.isSuccess =false;
          this.successMessage ="";
         }, 3000);
        }

      }
    }
  
  }

  validateData(){
    if (this.task=="") {
      this.isError=true;
      this.errorMessage = errorMessage.task;
    } 
    else if (this.priority==0 || this.priority==null) {
      this.isError=true;
      this.errorMessage = errorMessage.priority;
    } 
    else if (this.parentTask=="") {
      this.isError=true;
      this.errorMessage = errorMessage.parentTask;
    } 
    else if (this.startDate == null) {
      this.isError=true;
      this.errorMessage = errorMessage.startDate;
    } 
    else if (this.endDate==null) {
      this.isError=true;
      this.errorMessage = errorMessage.endDate;
    } 
    else if(this.startDate>this.endDate){
      this.isError=true;
      this.errorMessage = errorMessage.dateCompare;
    }
    else{
      this.errorMessage ="";
      this.isError =false;
    }
    setTimeout(()=>{ 
      this.isError =false;
      this.errorMessage ="";
     }, 3000);
  }
  setData (){
    this.Task.TaskID  = this.taskID;
    this.Task.Task = this.task;
    this.Task.ParentID =this.parentTaskID;
    this.Task.ParentTask =this.parentTask;
    this.Task.StartDate =this.startDate;
    this.Task.EndDate =this.endDate;
    this.Task.Priority =this.priority;
  }
  resetForm(iSReset)
  {
    this.task = "";
    this.parentTask="";
    this.priority = 0;
    this.startDate =null;
    this.endDate =null;
    this.isError =false;
    this.errorMessage ="";
    if (iSReset) {
      this.isSuccess =false;
      this.successMessage ="";
    } else {
      setTimeout(()=>{ 
        this.isSuccess =false;
        this.successMessage ="";
       }, 3000);
    }
    
  }
}


enum errorMessage{
  task = "Please enter Task !",
  priority ="Please Select Priority !",
  parentTask ="Please enter Parent Task !",
  startDate = "Please enter Start Date !",
  endDate ="Please enter End Date !",
  dateCompare = "Start Date can not be greater than End Date !"
}

enum successMessage{
  saved = "Data Saved Sucessfully !",
  updated ="Task Updated Successfully !"
}