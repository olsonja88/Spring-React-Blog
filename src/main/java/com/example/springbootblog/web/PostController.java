package com.example.springbootblog.web;

import com.example.springbootblog.model.Post;
import com.example.springbootblog.model.PostRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class PostController {
    
    // For log statements
    private final Logger log = LoggerFactory.getLogger(PostController.class);

    // Collection of posts
    private PostRepository postRepository;


    // Constructor
    public PostController(PostRepository postRepository) {
        this.postRepository = postRepository;
    }


    // Get all posts from the repository
    @GetMapping("/posts")
    Collection<Post> posts() {

        // Return all posts in the repository
        return postRepository.findAll();
    }


    // Get specific post from the repository
    @GetMapping("/posts/{id}")
    ResponseEntity<?> getPost(@PathVariable Long id) {

        // Make an "optional" variable to the hold the post we want in case it doesn't exist
        Optional<Post> post = postRepository.findById(id);

        // Return a response with the data from the found post, if it doesn't exist then return "not found"
        return post.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }


    // Add a new post to the repository
    @PostMapping("/post")
    ResponseEntity<Post> createPost(@Valid @RequestBody Post post) throws URISyntaxException {

        // Log our request in the terminal
        log.info("Request to create post: {}", post);

        // Save our new post in the repository, store the return value in "result"
        Post result = postRepository.save(post);

        // Return a "created", 201 response with the URI of the new post
        return ResponseEntity.created(new URI("/api/post" + result.getId()))
                .body(result);
    }


    // Update or edit an exists post in the repository
    @PutMapping("/post/{id}")
    ResponseEntity<Post> updatePost(@Valid @RequestBody Post post) {

        // Log our request in the terminal
        log.info("Request to update post: {}", post);

        // Save the new post into the repository, save the return value into result
        Post result = postRepository.save(post);

        // Return a successful status with the new post data
        return ResponseEntity.ok().body(result);
    }


    // Remove a category from the repository
    @DeleteMapping("/post/{id}")
    public ResponseEntity<?> deletePost(@PathVariable Long id) {

        // Log our request in the terminal
        log.info("Request to delete post: {}", id);

        // Remove the post from the repository
        postRepository.deleteById(id);

        // Indicate successful result without returning any data
        return ResponseEntity.ok().build();
    }
}
