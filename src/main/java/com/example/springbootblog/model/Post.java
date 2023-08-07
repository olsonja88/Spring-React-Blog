package com.example.springbootblog.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import jakarta.persistence.*;

import java.time.Instant;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Post {
    
    @Id
    @GeneratedValue
    private Long Id;

    @NonNull
    private String title;
    
    private String content;
    private Instant date;
}
