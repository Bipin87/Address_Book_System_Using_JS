const Contacts = require('../models/Contacts.js');

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (!(contact instanceof Contacts)) {
            throw new Error(`Invalid contact ${contact}. Must be an instance of Contact.`);
        }
        this.contacts.push(contact);
    }

    findContact(firstName, lastName) {
        return this.contacts.find(contact => contact.firstName === firstName && contact.lastName === lastName);
    }

    editContact(firstName, lastName, updatedData) {
        const contact = this.findContact(firstName, lastName);
        if (!contact) {
            throw new Error("Contact not found.");
        }

        Object.keys(updatedData).forEach(key => {
            if (contact.hasOwnProperty(key)) {
                contact[key] = updatedData[key];
            }
        });

        return contact;
    }

    getContact() {
        return this.contacts;
    }
}

module.exports = AddressBook;
