package com.example.application.services;

import com.example.application.data.Contact;
import com.example.application.data.ContactRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import com.vaadin.hilla.crud.ListRepositoryService;
import reactor.core.publisher.Flux;

import java.time.Duration;

@BrowserCallable
@AnonymousAllowed
public class ContactService extends ListRepositoryService<Contact, Long, ContactRepository> {

    public Contact save(Contact contact) {
        return getRepository().save(contact);
    }

    public Flux<String> getNames() {
        return Flux.fromIterable(getRepository().findAll()).map(Contact::getFirstName).delayElements(Duration.ofSeconds(1));
    }
}
