import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  API_URL = environment.apiUrl;

  constructor(private _http:HttpClient) { }
//:Observable<ITask[]>
  getTaskList()
  {
    //return;
    //return this._http.get(this.API_URL).pipe(map((response:Response)=>response.json()));
     return this._http.get <ITask>(this.API_URL);
  }

  private extraxctData(res:Response){
    let body = res;
    return body ||{};
  }

}

export interface ITask {
  TaskID:number;
  Task:string;
  ParentID:number;
  ParentTask:string;
  StartDate:Date;
  EndDate:Date;
  Priority:number; 
  IsClosed:boolean;
}
