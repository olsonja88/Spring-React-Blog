package com.example.springbootblog;

import com.example.springbootblog.model.Category;
import com.example.springbootblog.model.Post;
import com.example.springbootblog.model.CategoryRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Collections;
import java.util.stream.Stream;

@Component
class Initializer implements CommandLineRunner {

    // Create a category repository that can't be modified after initializing
    private final CategoryRepository repository;

    // Constructor
    public Initializer(CategoryRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) {

        // Create a new category for each string in the stream, save each category into the repository
        Stream.of("Web Development", "Mobile Development", "Game Development").forEach(name -> 
        repository.save(new Category(name))
        );

        // Local variable to hold "category one"
        Category catOne = repository.findByName("Web Development");

        // Local variable to hold "post one"
        Post postOne = Post.builder().title("First Time Making a Web App")
            .content("Building a web application is hard, but that doesn't mean you shouldn't try!  " + 
            "In my experience it definitely helps to read a lot of different tutorials, lots of stackoverflow, and be patient.")
            .date(Instant.now())
            .build();

        // Set posts of "category one" to "post one"
        catOne.setPosts(Collections.singleton(postOne));

        // Save "category one" to the repository
        repository.save(catOne);

        Category catTwo = repository.findByName("Mobile Development");
        Post postTwo = Post.builder().title("Best Projects for Beginning Mobile Development")
            .content("Looking for ideas to begin learning mobile development?  Here are some great projects to get you started.  " +
            "Simple Task Manager, Weather App, Quiz App, Expense Tracker, Recipe Finder, Movie Recommendation, Habit Tracker.")
            .date(Instant.now())
            .build();
        catTwo.setPosts(Collections.singleton(postTwo));
        repository.save(catTwo);

        Category catThree = repository.findByName("Game Development");
        Post postThree = Post.builder().title("Game Testing")
            .content("Game testing is arguably the most important part of game development.  " +
            "After each new feature is created, it's important to make sure that you get the feel right.")
            .date(Instant.now())
            .build();
        catThree.setPosts(Collections.singleton(postThree));
        repository.save(catThree);

        // Print each category in the terminal
        repository.findAll().forEach(System.out::println);
    }
}
