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