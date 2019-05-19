import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {TaskServiceService,ITask} from 'src/app/task-service.service';
import { finalize } from 'rxjs/operators';
import {SearchFilterPipe} from 'src/app/search-filter.pipe';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers:[TaskServiceService],
  //pipes:[SearchFilterPipe]
})
export class ViewTaskComponent implements OnInit {

  public taskList : ITask[];//Observable<ITask>;
  public searchTask:string;
  public searchParentTask:string;
  public searchPriorityFrom:number;
  public searchPriorityTo:number;
  public searchStartDate:string;
  public searchEndDate:string;
  isSuccess:boolean=false;
  isSearch:boolean=false;
  successMessage:string ="";
  selectedTask :ITask[];
  isEndDelete:boolean=false;
  modalButtonText :string ="Close";

  searchTaskObj:SearchITask = new SearchITask();

  constructor(private modalService: NgbModal, private _taskservice: TaskServiceService) {}

  ngOnInit() {
    this.getTaskList();
  }
  open(content)
  {
    this.modalService.open(content, { centered: true ,size: 'lg' });
  }

  openEndTask(content)
  {
    this.modalService.open(content, { centered: true ,size: 'sm' });
  }
  close(result: any)
  {
    this.getTaskList();
  }
  getTaskList(){
    console.log('In first block');
    this._taskservice.getTaskList<ITask[]>().subscribe((data :ITask[])=> this.taskList = data),
    finalize(()=>{
      //debugger;
      console.log('In Final block');
      console.log(this.taskList);
    })

  }

  searchInTaskList(){
    if (this.taskList.length>0) {
      let serachCriteria:ITask;
      serachCriteria.Task = this.searchTask;
      serachCriteria.ParentTask = this.searchParentTask;
      serachCriteria.StartDate =this.searchStartDate;
      serachCriteria.EndDate =this.searchEndDate;
    } else {
    }

  }

  editTask(id,isEditDelete){
    this.selectedTask = this.taskList.filter(x=>x.TaskID === id);
    if (isEditDelete) {
      this.isEndDelete =true;
      this.modalButtonText="Close";
    } else {
      this.isEndDelete =false;
      this.modalButtonText ="Delete";
    }
  }
  endTask(taskID){
    if (taskID ==null) {
      return;
    }
    this.selectedTask = this.taskList.filter(x=>x.TaskID === taskID);
    this.selectedTask[0].IsClosed =true;
    let result =this._taskservice.updateTask(this.selectedTask[0]);
        if ( result)
        {
        this.isSuccess =true;
        this.successMessage =successMessage.ended;
        this.modalService.dismissAll('Cross click');
        }
        setTimeout(()=>{ 
          this.isSuccess =false;
          this.successMessage ="";
          this.getTaskList();
          this.resetSearchForm();
         }, 2000);
  }

  deleteTask()
  {
    debugger;
    let result =this._taskservice.deleteTask(this.selectedTask[0].TaskID.toString());
        if ( result)
        {
        this.isSuccess =true;
        this.successMessage =successMessage.deleted;
        this.modalService.dismissAll('Cross click');
        }
        setTimeout(()=>{ 
          this.isSuccess =false;
          this.successMessage ="";
          this.getTaskList();
          //this.resetSearchForm();
         }, 2000);
  }

  resetSearchForm()
  {
    this.searchTaskObj.Task="";
    this.searchTaskObj.ParentTask="";
    this.searchTaskObj.StartDate="";
    this.searchTaskObj.EndDate ="";
    this.searchTaskObj.PriorityFrom=0;
    this.searchTaskObj.PriorityTo=0;
  }

  trackByFn(index, item)
  {
    if (!item) {
      return null;
    } else {
      return item.TaskID;
    }
  }
}

enum successMessage{
  saved = "Data Saved Sucessfully !",
  updated ="Task Updated Successfully !",
  ended ="Task Closed Successfully !",
  deleted ="Task Deleted Successfully !",
}

export class SearchITask {
  
  private _Task : string;
  public get Task() : string {
    return this._Task;
  }
  public set Task(v : string) {
    this._Task = v;
  }
  
  
  private _ParentTask : string;
  public get ParentTask() : string {
    return this._ParentTask;
  }
  public set ParentTask(v : string) {
    this._ParentTask = v;
  }
  
  
  private _StartDate : string;
  public get StartDate() : string {
    return this._StartDate;
  }
  public set StartDate(v : string) {
    this._StartDate = v;
  }
  
  
  private _EndDate : string;
  public get EndDate() : string {
    return this._EndDate;
  }
  public set EndDate(v : string) {
    this._EndDate = v;
  }
  
  
  private _PriorityFrom : number;
  public get PriorityFrom() : number {
    return this._PriorityFrom;
  }
  public set PriorityFrom(v : number) {
    this._PriorityFrom = v;
  }
  
  
  private _PriorityTo : number;
  public get PriorityTo() : number {
    return this._PriorityTo;
  }
  public set PriorityTo(v : number) {
    this._PriorityTo = v;
  }
  
  // Task:string="";
  // ParentTask:string="";
  // StartDate:string="";
  // EndDate:string="";
  // PriorityFrom:number=0; 
  // PriorityTo:number=30; 
}
