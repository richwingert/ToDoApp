export class AppConstants{

  public static readonly tasksAPI: string = "http://localhost:8080";
  public static readonly getTasksAPI: string = AppConstants.tasksAPI + "/getTasks";
  public static readonly saveTasksAPI: string = AppConstants.tasksAPI + "/saveTask";
  public static readonly deleteTasksAPI: string = AppConstants.tasksAPI + "/deleteTask";
}
