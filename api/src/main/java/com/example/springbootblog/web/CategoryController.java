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
    private final Logger log = LoggerFactory.getLogger(CategoryController.class);
    
    private CategoryRepository categoryRepository;


    public CategoryController(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }


    @GetMapping("/categories")
    Collection<Category> categories() {
        return categoryRepository.findAll();
    }


    @GetMapping("/category/{id}")
    ResponseEntity<?> getCategory(@PathVariable Long id) {
        Optional<Category> category = categoryRepository.findById(id);
        return category.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }


    @PostMapping("/category")
    ResponseEntity<Category> createCategory(@Valid @RequestBody Category category) throws URISyntaxException {
        log.info("Request to create category: {}", category);
        Category result = categoryRepository.save(category);
        return ResponseEntity.created(new URI("/api/category" + result.getId()))
                .body(result);
    }


    @PutMapping("/category/{id}")
    ResponseEntity<Category> updateCategory(@Valid @RequestBody Category category) {
        log.info("Request to update category: {}", category);
        Category result = categoryRepository.save(category);
        return ResponseEntity.ok().body(result);
    }

    
    @DeleteMapping("/category/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable Long id) {
        log.info("Request to delete category: {}", id);
        categoryRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
