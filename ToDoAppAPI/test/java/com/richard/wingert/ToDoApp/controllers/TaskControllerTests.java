package com.richard.wingert.ToDoApp.controllers;

import com.richard.wingert.ToDoApp.entities.Task;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@AutoConfigureMockMvc
@RunWith(SpringRunner.class)
@SpringBootTest
public class TaskControllerTests {

    @Autowired
    private TaskController taskController;

    @Test
    void testGetAll() {
        List<Task> tasks = taskController.getTasks();
        //test the returned list
        assertThat(tasks.size()).isNotNull();
    }

    @Test
    void testSaveTask() {
        Task t = new Task("test task", "test descr");
        List<Task> tasks = taskController.saveTask(t);
        //test the returned list if it contains the above value
        assertThat(
                tasks.stream()
                    .filter(f -> "test task".equals(f.getName()))
                    .findAny()
                    .orElse(null)
        ).isNotNull();
    }

    @Test
    void testDeleteTask() {
        Task t = new Task("test delete task", "test descr");
        taskController.saveTask(t); //ignore return val
        List<Task> tasks = taskController.deleteTask(t);
        //test the returned list
        assertThat(
                tasks.stream()
                        .filter(f -> "test delete task".equals(f.getName()))
                        .findAny()
                        .orElse(null)
        ).isNull();
    }

}
