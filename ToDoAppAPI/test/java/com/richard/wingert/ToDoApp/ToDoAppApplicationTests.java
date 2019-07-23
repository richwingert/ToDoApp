package com.richard.wingert.ToDoApp;

import com.richard.wingert.ToDoApp.controllers.TaskController;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ToDoAppApplicationTests {

	@Autowired
	private TaskController controller;

	@Test
	void contextLoads() {
		assertThat(controller).isNotNull();
	}

}
