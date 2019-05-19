import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from './task-service.service';
import { take } from 'rxjs/operators';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(taskList: ITask[], searchTask: string, searchParentTask:string, searchStartDate:string, searchEndDate:string, searchPriorityFrom:number, searchPriorityTo:number ): ITask[] {
      debugger;
      if (!taskList) {
        return;
      }
      if (taskList.length>0) {
        if (false) {
          return taskList;
        }
        else{
         return taskList.filter((task)=>{
              if (searchTask && task.Task.toLowerCase().indexOf(searchTask.toLowerCase()) === -1){
                  return false;
              }
              if (searchParentTask && task.ParentTask && typeof task.ParentTask === "string" && task.ParentTask!.toLowerCase().indexOf(searchParentTask.toLowerCase()) === -1){
                  return false;
              }
              if (searchStartDate && task.StartDate<=searchStartDate){
                  return false;
              }
              if (searchEndDate && task.EndDate>=searchEndDate){
                return false;
              }
              if (searchPriorityFrom && task.Priority<=searchPriorityFrom) {
                return false;
              }
              if (searchPriorityTo && task.Priority>=searchPriorityTo) {
                return false;
              }

              return true;
           //return task.Task.toLowerCase().includes(searchTask.toLowerCase());
         })
        }
      }
      else {
        return null;
      }
  }

}
