# Spring-React-Blog
## Description
Blog and admin page applications built with a React frontend and Spring backend.
Built with Spring-Boot, this is an optional final project for my data structures class.

## How to Run Locally
* Must have Java 20 and latest version of Maven installed.
1. Clone this repository into a directory.
2. cd into the blog-app folder, and install the following dependencies via npm:
* bootstrap
* react-bootstrap
* to install type "npm i bootstrap" and "npm i react-bootstrap" in terminal.
3. cd out and into the admin-app folder, and install the following dependencies via npm:
* react-admin
* ra-data-json-server
4. cd out to base folder and run "mvnw package" to build the projects files.
5. run "mvnw spring-boot:run", and the front end should open in your browser at localhost:8080/blog-app

## Current State 8/4/23
Data created in Initializer.java can be fetched and displayed nicely on the frontend.

## Next Steps:
* Connect Spring Boot API to remote DB to store data permanently
* Setup React to fetch from remote DB
* Map all posts from the data table into the Posts component in React
