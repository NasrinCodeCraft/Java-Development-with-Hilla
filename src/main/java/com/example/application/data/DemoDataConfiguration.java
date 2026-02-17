package com.example.application.data;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DemoDataConfiguration {

    @Bean
    public CommandLineRunner loadData(ContactRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                repository.save(new Contact("Sara", "Moradi", "sara.moradi@example.com", "+98-912-345-6789"));
                repository.save(new Contact("Reza", "Karimi", "reza.karimi@example.com", "+98-933-111-2244"));
                repository.save(new Contact("Niloofar", "Ahmadi", "niloofar.ahmadi@example.com", "+98-935-556-7788"));
                repository.save(new Contact("Arman", "Shirazi", "arman.shirazi@example.com", "+98-901-882-3311"));
                repository.save(new Contact("Maryam", "Nikzad", "maryam.nikzad@example.com", "+98-902-991-6644"));
            }
        };
    }
}
