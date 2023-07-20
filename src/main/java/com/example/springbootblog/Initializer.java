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
        Stream.of("Web Development", "Mobile Development", "Game Development",
        "Embedded Systems").forEach(name -> 
        repository.save(new Category(name))
        );

        Category catOne = repository.findByName("Web Development");
        Post postOne = Post.builder().title("Best Comp Sci Resources")
            .content("Here are the best resources to learn Comp Sci!")
            .date(Instant.now())
            .build();
        catOne.setPosts(Collections.singleton(postOne));
        repository.save(catOne);

        repository.findAll().forEach(System.out::println);
    }
}
