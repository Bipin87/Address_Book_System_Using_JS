const AddressBook = require("./service/AddressBook.js");
const Contact = require("./models/Contacts.js");

const myAddressBook = new AddressBook();

try {
    const contact1 = new Contact("Bipin", "Sahu", "Bhopal", "Madhya Pradesh", 462022, "3432153321", "bipin342@gmail.com");
    
    myAddressBook.addContact(contact1);

    console.log("All Contacts:", myAddressBook.getContact());

    const foundContact = myAddressBook.findContact("Bipin", "Sahu");
    console.log("Found Contact:", foundContact);
    
} catch (error) {
    console.error("Error:", error);
}
