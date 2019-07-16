import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Task} from "../domain/task.class";
import {Observable} from "rxjs/internal/Observable";

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
    return this.http.get("/assets/data/taskList.mock.json");
  }

  /**
   * Updates a task in the API, based on the task's id
   * @param {Task} task
   */
  updateTask(task: Task){

  }

  /**
   * Remove a task from the API
   * @param {Task} task
   */
  removeTask(task: Task){

  }
}
