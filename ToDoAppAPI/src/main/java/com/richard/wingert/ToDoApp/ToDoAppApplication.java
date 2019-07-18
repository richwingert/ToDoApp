package com.richard.wingert.ToDoApp;

import com.richard.wingert.ToDoApp.entities.Task;
import com.richard.wingert.ToDoApp.repositories.TaskRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.stream.Stream;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class ToDoAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(ToDoAppApplication.class, args);
    }

    /**
     * PreLoad some blank tasks
     * @param taskRepository
     * @return
     */
    @Bean
    CommandLineRunner init(TaskRepository taskRepository) {
        return args -> {
            Stream.of("Initial Sample Task", "Second Sample Task").forEach(name -> {
                Task task = new Task(name, name + " description text");
                taskRepository.save(task);
            });
            taskRepository.findAll().forEach(System.out::println);
        };
    }

    /**
     * CORS Configuration
     */
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedMethods("GET", "POST")
                        .allowedOrigins("http://localhost:4200")
                        .allowedHeaders("*");
            }
        };
    }
}
