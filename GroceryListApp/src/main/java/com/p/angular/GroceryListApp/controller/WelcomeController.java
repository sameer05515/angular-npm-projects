package com.p.angular.GroceryListApp.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.util.StreamUtils;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

@Controller
public class WelcomeController {

    @GetMapping("/")
    public ResponseEntity<String> welcome() {
        try {
            Resource resource = new ClassPathResource("welcome.html");
            InputStream inputStream = resource.getInputStream();
            byte[] bytes = StreamUtils.copyToByteArray(inputStream);
            String content = new String(bytes, StandardCharsets.UTF_8);
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.TEXT_HTML);
            return ResponseEntity.ok().headers(headers).body(content);
        } catch (IOException e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    @GetMapping("/redoc.html")
    public ResponseEntity<String> redoc() {
        try {
            Resource resource = new ClassPathResource("redoc.html");
            InputStream inputStream = resource.getInputStream();
            byte[] bytes = StreamUtils.copyToByteArray(inputStream);
            String content = new String(bytes, StandardCharsets.UTF_8);
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.TEXT_HTML);
            return ResponseEntity.ok().headers(headers).body(content);
        } catch (IOException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
