const Contact = require('../models/Contacts.js');

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    // Add a contact to the address book
    addContact(contact) {
        if (!(contact instanceof Contact)) {
            throw new Error("Invalid contact. Must be an instance of Contact.");
        }
        // Check for duplicate using filter()
        const isDuplicate = this.contacts
            .filter(existingContact => existingContact.firstName === contact.firstName && existingContact.lastName === contact.lastName)
            .length > 0;

        if (isDuplicate) {
            throw new Error(`Contact with name ${contact.firstName} ${contact.lastName} already exists.`);
        }

        this.contacts.push(contact);
    }

    // Find a contact by first and last name
    findContact(firstName, lastName) {
        return this.contacts.find(contact => 
            contact.firstName === firstName && contact.lastName === lastName
        );
    }

    // Update an existing contact
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

    // Delete a contact from the address book
    deleteContact(firstName, lastName) {
        const index = this.contacts.findIndex(contact =>
            contact.firstName === firstName && contact.lastName === lastName
        );

        if (index === -1) {
            throw new Error("Contact not found.");
        }

        return this.contacts.splice(index, 1)[0];
    }

    // Method to count the number of contact in the address book
    getContactCount() {
        return this.contacts.reduce((count) => count + 1, 0);
    }
    
    // Get all contacts
    getContacts() {
        return this.contacts;
    }
    // Search contacts by city
    searchByCity(city) {
        return this.contacts.filter(contact => contact.city.toLowerCase() === city.toLowerCase());
    }
    // Search contacts by state
    searchByState(state) {
        return this.contacts.filter(contact => contact.state.toLowerCase() === state.toLowerCase());
    }

    // Get all unique cities where people live
    getAllCities() {
        return [...new Set(this.contacts.map(contact => contact.city))];
    }

    // Get all unique states where people live
    getAllStates() {
        return [...new Set(this.contacts.map(contact => contact.state))];
    }
    // View persons by city
    viewByCity() {
        return this.contacts.reduce((acc, contact) => {
            acc[contact.city] = acc[contact.city] || [];
            acc[contact.city].push(contact);
            return acc;
        }, {});
    }

    // View persons by state
    viewByState() {
        return this.contacts.reduce((acc, contact) => {
            acc[contact.state] = acc[contact.state] || [];
            acc[contact.state].push(contact);
            return acc;
        }, {});
    }
    // Count contacts by city
    countByCity() {
        return this.contacts.reduce((acc, contact) => {
            acc[contact.city] = (acc[contact.city] || 0) + 1;
            return acc;
        }, {});
    }

    // Count contacts by state
    countByState() {
        return this.contacts.reduce((acc, contact) => {
            acc[contact.state] = (acc[contact.state] || 0) + 1;
            return acc;
        }, {});
    }
    // Sort contacts alphabetically by firstName, then lastName
    sortContactsByName() {
        return this.contacts.sort((a, b) => {
            if (a.firstName.toLowerCase() === b.firstName.toLowerCase()) {
                return a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase());
            }
            return a.firstName.toLowerCase().localeCompare(b.firstName.toLowerCase());
        });
    }
    // Sort contacts by City
    sortByCity() {
        return this.contacts.sort((a, b) => a.city.localeCompare(b.city));
    }

    // Sort contacts by State
    sortByState() {
        return this.contacts.sort((a, b) => a.state.localeCompare(b.state));
    }

    // Sort contacts by Zip Code
    sortByZip() {
        return this.contacts.sort((a, b) => a.zip.localeCompare(b.zip));
    }
}

module.exports = AddressBook;
