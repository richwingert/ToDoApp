import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Task} from "../domain/task.class";
import {Observable} from "rxjs/internal/Observable";
import {AppConstants} from "../../app.constants";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  /**
   * Create and store a task on API
   * @param {Task} task
   */
  createTask(task: Task){

  }

  /**
   * Fetch list of all tasks
   * @returns {Observable<any>}
   */
  getTaskList(){
    // return this.http.get("/assets/data/taskList.mock.json");
    return this.http.get(AppConstants.getTasksAPI);
  }

  /**
   * Updates a task in the API, based on the task's id
   * @param {Task} task
   */
  updateTask(task: Task){
    return this.http.post(AppConstants.saveTasksAPI, task);
  }

  /**
   * Remove a task from the API
   * @param {Task} task
   */
  removeTask(task: Task){

  }

  /**
   * Helper function to get the column definitions for the tasks widget grid
   * @returns {Observable<Object>}
   */
  getTasksWidgetColDef(){
    return this.http.get("/assets/data/colDefs.tasks-widget.json");
  }
}
