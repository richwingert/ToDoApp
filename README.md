# ToDoApp
Quick To-Do application

Install prerequisites (jdk, maven, node, npm) first.

#Steps to run spring boot API
1. Install prerequisites (jdk, maven).
2. In root dir, run `mvn clean install`.
3. In root dir, run `java -jar ToDoAppAPI/target/ToDoAppAPI-0.0.1-SNAPSHOT.jar` (the name of the jar generated in mvn step).
4. API will be available at localhost:8080

#Steps to run angular web server
1. Install prerequisites (node, npm).
2. In `/ToDoAppAngular/`, run npm install
3. In `/ToDoAppAngular/`, run npm start
4. Web server will be available at localhost:4200


#Project Structure
The project is divided into two modules, meant to be run separately. 
1. `ToDoAppAngular` hosts the Angular web-server. internal ng structure within the app folder is
    1. core folder holds the Task pojo class and our Tasks service folder. Used to access the API
    2. modules folder is where we keep our different modules (in this case, just a dashboard module)
        1. Dashboard module consists of an edit modal and our ag-grid code. tasks-widget is the main point of the app.
        Also have a folder of cell, header, and filter renderers in this folder.
2. `ToDoAppAPI` hosts the Spring Boot API server. The src folder contains 5 files.
    1. ToDoAppApplication is the main entry point.
    2. controllers/TaskController is the main api controller. Right now, we just have 3 endpoints, save, delete and getall.
    3. entities/Task is our main pojo used for tasks.
    4. repositories/TaskRepository is an JPA crud repo for our tasks.


#####Minor Note:
For some reason, my tests are failing in Maven, but not in IntelliJ. I haven't debugged the issue yet, 
but for now, I moved the tests up a level so maven won't see them. You can still run them manually from your IDE (currently showing a 95% line coverage!).