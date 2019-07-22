package com.richard.wingert.ToDoApp.repositories;

import com.richard.wingert.ToDoApp.entities.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Long>{}
