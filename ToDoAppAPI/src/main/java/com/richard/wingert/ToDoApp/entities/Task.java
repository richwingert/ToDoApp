package com.richard.wingert.ToDoApp.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;
    private Date dueDate;
    private String description ;
    private boolean completed;
    private int priority;

    //Constructors
    public Task() {
        this.name = "";
        this.completed = false;
        this.priority = 0;
    }
    public Task(String name) {
        this.name = name;
        this.completed = false;
        this.priority = 0;
    }

    public Task(String name, String description) {
        this.name = name;
        this.description = description;
        this.completed = false;
        this.priority = 0;
    }

    public Task(String name, Date dueDate, String description, boolean completed, int priority){
        this.name = name;
        this.dueDate = dueDate;
        this.description = description;
        this.completed = completed;
        this.priority = priority;
    }

    //Getters / Setters
    public long getId() { return id; }
    public void setId(long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Date getDueDate() { return dueDate; }
    public void setDueDate(Date dueDate) { this.dueDate = dueDate; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public boolean getCompleted() { return completed; }
    public void setCompleted(boolean completed) { this.completed = completed; }

    public int getPriority() { return priority; }
    public void setPriority(int priority) { this.priority = priority; }

    @Override
    public String toString() {
        return "Task{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", dueDate=" + dueDate +
                ", description='" + description + '\'' +
                ", completed=" + completed +
                ", priority=" + priority +
                '}';
    }
}