package com.example.springbootblog.web;

import com.example.springbootblog.model.Category;
import com.example.springbootblog.model.CategoryRepository;

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
public class CategoryController {

    // For log statements
    private final Logger log = LoggerFactory.getLogger(CategoryController.class);

    // Collection of categories
    private CategoryRepository categoryRepository;


    // Constructor
    public CategoryController(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }


    // Get all categories from the repository
    @GetMapping("/categories")
    Collection<Category> categories() {

        // Return all categories in the repository
        return categoryRepository.findAll();
    }


    // Get specific category from the repository
    @GetMapping("/category/{id}")
    ResponseEntity<?> getCategory(@PathVariable Long id) {

        // Store the category we want into an "optional" variable in case it doesn't exist
        Optional<Category> category = categoryRepository.findById(id);

        // Return a response holding the data from the specific category, return "not found" if it doesn't exist
        return category.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }


    // Add a new category to the repository
    @PostMapping("/category")
    ResponseEntity<Category> createCategory(@Valid @RequestBody Category category) throws URISyntaxException {
        
        // Log our request in the terminal 
        log.info("Request to create category: {}", category);

        // Save the new category into the repository, store the return value in "result"
        Category result = categoryRepository.save(category);

        // Return a response with the URI of the new category
        return ResponseEntity.created(new URI("/api/category" + result.getId()))
                .body(result);
    }


    // Update or edit an already existing category in the repository
    @PutMapping("/category/{id}")
    ResponseEntity<Category> updateCategory(@Valid @RequestBody Category category) {
        
        // Log our request in the terminal
        log.info("Request to update category: {}", category);

        // Save the updated category into the repositorym store the return value in "result"
        Category result = categoryRepository.save(category);

        // Return a successful response with the data from the updated category 
        return ResponseEntity.ok().body(result);
    }

    
    // Remove a category from the repository
    @DeleteMapping("/category/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable Long id) {
        
        // Log our request in the terminal
        log.info("Request to delete category: {}", id);

        // Delete the category from the repository
        categoryRepository.deleteById(id);

        // Return a successful response with no data
        return ResponseEntity.ok().build();
    }
}
