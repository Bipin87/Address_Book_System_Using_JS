const AddressBook = require("./service/AddressBook.js");
const Contact = require("./models/Contacts.js");

const myAddressBook = new AddressBook();

try {
    // Creating a new contact
    const contact1 = new Contact(
        "Bipin", 
        "Sahu", 
        " Piplani Bhopal",
        "Bhopal", 
        "Madhya Pradesh", 
        "234416", 
        "9111227461", 
        "bipin342@gmail.com"
    );
    
    // Adding contact to address book
    myAddressBook.addContact(contact1);

    console.log("All Contacts:", myAddressBook.getContacts());

    // Searching for a contact
    const foundContact = myAddressBook.findContact("Bipin", "Sahu");
    console.log("Found Contact:", foundContact);
      
} catch (error) {
    console.error("Error:", error.message);
}
