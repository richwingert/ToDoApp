package com.richard.wingert.ToDoApp.controllers;

import java.util.List;

import com.richard.wingert.ToDoApp.entities.Task;
import com.richard.wingert.ToDoApp.repositories.TaskRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200/dashboard")
public class TaskController {

    private final TaskRepository taskRepository;
    Logger logger = LoggerFactory.getLogger(LoggingController.class);

    public TaskController(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @GetMapping("/getTasks")
    public List<Task> getTasks() {
        List<Task> tasks = (List<Task>) taskRepository.findAll();
        logger.info("In /getTasks; sending tasks: " + tasks.toString());
        return tasks;
    }

    @PostMapping("/saveTask")
    public List<Task> saveTask(@RequestBody Task task) {
        //update entity
        logger.info("In /saveTask; saving tasks: " + task.toString());
        taskRepository.save(task);
        //return updated repository
        List<Task> tasks = (List<Task>) taskRepository.findAll();
        logger.info("In /saveTask; sending tasks: " + tasks.toString());
        return tasks;
    }

    @PostMapping("/deleteTask")
    public List<Task> deleteTask(@RequestBody Task task) {
        //update entity
        logger.info("In /deleteTask; deleting tasks: " + task.toString());
        taskRepository.delete(task);
        //return updated repository
        List<Task> tasks = (List<Task>) taskRepository.findAll();
        logger.info("In /deleteTask; sending tasks: " + tasks.toString());
        return tasks;
    }
}