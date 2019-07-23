package com.richard.wingert.ToDoApp.entities;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
public class TaskTests {

    @Autowired
    private Task task;

    @Test
    public void testAllDataConstructor() {
        Date d = new Date();
        Task task = new Task("name", d, "description", true, 1);
        //test values
        assertThat(task.getDueDate()).isEqualTo(d);
        assertThat(task.getPriority()).isEqualTo(1);
        assertThat(task.getName()).isEqualTo("name");
        assertThat(task.getDescription()).isEqualTo("description");
        assertThat(task.getCompleted()).isEqualTo(true);
    }

    @Test
    void testNameDescriptionConstructor() {
        Task task = new Task("name", "description");
        //test values
        assertThat(task.getName()).isEqualTo("name");
        assertThat(task.getDescription()).isEqualTo("description");
        //test default values
        assertThat(task.getCompleted()).isEqualTo(false);
        assertThat(task.getPriority()).isEqualTo(0);
    }

    @Test
    void testCompleted() {
        task.setCompleted(true);
        assertThat(task.getCompleted()).isEqualTo(true);
    }

    @Test
    void testDescription() {
        task.setDescription("test descr");
        assertThat(task.getDescription()).isEqualTo("test descr");
    }

    @Test
    void testName() {
        task.setName("test name");
        assertThat(task.getName()).isEqualTo("test name");
    }

    @Test
    void testPriority() {
        task.setPriority(1);
        assertThat(task.getPriority()).isEqualTo(1);
    }

    @Test
    void testDate() {
        Date test = new Date();
        task.setDueDate(test);
        assertThat(task.getDueDate()).isEqualTo(test);
    }

    @Test
    void testToString() {
        Task t = new Task("test");
        assertThat(t.toString()).contains("test");
        //Todo expand this
    }
}
