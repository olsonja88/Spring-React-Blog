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

    private final CategoryRepository repository;

    public Initializer(CategoryRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) {
        Stream.of("Web Development", "Mobile Development", "Game Development").forEach(name -> 
        repository.save(new Category(name))
        );

        Category catOne = repository.findByName("Web Development");
        Post postOne = Post.builder().title("First Time Making a Web App")
            .content("Building a web application is hard, but that doesn't mean you shouldn't try!  " + 
            "In my experience it definitely helps to read a lot of different tutorials, lots of stackoverflow, and be patient.")
            .date(Instant.now())
            .build();
        catOne.setPosts(Collections.singleton(postOne));
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

        repository.findAll().forEach(System.out::println);
    }
}
