# Spring-React-Blog
## Description
Blog and admin page applications built with a React frontend and Spring backend.
Built with Spring-Boot, this is an optional final project for my data structures class.

## How to Run Locally
* Must have Java 20 and latest version of Maven installed.
1. Clone this repository into a directory.
2. cd into the ui/blog-app folder, and install the following dependencies via npm:
* bootstrap
* reactstrap
* react-bootstrap
* react-router-dom
* to install type "npm i bootstrap, reactstrap, react-bootstrap, react-router-dom" in terminal.
5. In another terminal, navigate into the api folder.
6. Run "mvnw spring-boot:run"
7. In the original terminal at dir "ui/blog-app", run "npm start".
8. The app should open up in your browser once npm starts it.

## Current State 8/4/23
Data created in Initializer.java can be fetched and displayed nicely on the frontend.

## Next Steps:
* Connect Spring Boot API to remote DB to store data permanently
* Setup React to fetch from remote DB
* Map all posts from the data table into the Posts component in React
* Get React to successfully build with Spring Boot
