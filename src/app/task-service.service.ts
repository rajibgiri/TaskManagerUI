import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  API_URL = environment.apiUrl;

  constructor(private _http:HttpClient) { }
//:Observable<ITask[]>
  getTaskList<ITask>(): Observable<ITask>
  {
    //return this._http.get(this.API_URL).pipe(map((response:Response)=>response.json()));
    let lst : Observable<ITask>;
    lst = this._http.get<ITask>(this.API_URL);
    return lst;
  }

  saveTask(task:ITask){
    return this._http.post(this.API_URL,task,     
      {headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe(
      (val) => {
         // console.log("POST call successful value returned in body", val);
      },
      response => {
          //console.log("POST call in error", response);
      },
      () => {
         // console.log("The POST observable is now completed.");
      });;
  }

  updateTask(task:ITask){
    return this._http.put(this.API_URL,task,     
      {headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe(
      (val) => {
         // console.log("POST call successful value returned in body", val);
      },
      response => {
         // console.log("POST call in error", response);
      },
      () => {
         // console.log("The POST observable is now completed.");
      });;
  }

  deleteTask(taskId:string){
    return this._http.delete(this.API_URL+"/"+taskId).subscribe(
      (val) => {
         // console.log("POST call successful value returned in body", val);
      },
      response => {
        //  console.log("POST call in error", response);
      },
      () => {
         // console.log("The POST observable is now completed.");
      });;
  }
}

export interface ITask {
  TaskID:number;
  Task:string;
  ParentID:number;
  ParentTask:string;
  StartDate:string;
  EndDate:string;
  Priority:number; 
  IsClosed:boolean;
}
