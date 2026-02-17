package com.example.application.services;

import com.example.application.data.Contact;
import com.example.application.data.ContactRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import com.vaadin.hilla.crud.ListRepositoryService;

@BrowserCallable
@AnonymousAllowed
public class ContactService extends ListRepositoryService<Contact, Long, ContactRepository> {

    public Contact save(Contact contact) {
        return getRepository().save(contact);
    }
}
