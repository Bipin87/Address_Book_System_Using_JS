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
    const contact2 = new Contact("Rahul", "Verma", "Indore", "Indore", "Madhya Pradesh", "452001", "9876543210", "rahul.verma@email.com");
    const contact3 = new Contact("Bipin", "Sahu", "New Delhi", "Delhi", "Delhi", "110001", "9123456789", "bipin.duplicate@email.com"); // Duplicate
    const contact4 = new Contact("Amit", "Sharma", "Gandhi Nagar", "Bhopal", "Madhya Pradesh", "462016", "9123456789", "amitsharma@email.com");
    const contact5 = new Contact("Sneha", "Patil", "Shivaji Nagar", "Pune", "Maharashtra", "411001", "9876541230", "sneha.patil@email.com");
    const contact6 = new Contact("Anjali", "Mehta", "Baner", "Pune", "Maharashtra", "411045", "9876512345", "anjali.mehta@email.com");


    
    // Adding contact to address book
    myAddressBook.addContact(contact1);
    myAddressBook.addContact(contact2);
    myAddressBook.addContact(contact4);
    myAddressBook.addContact(contact5);
    myAddressBook.addContact(contact6);

    console.log("All Contacts:", myAddressBook.getContacts());

    // Searching for a contact
    const foundContact = myAddressBook.findContact("Bipin", "Sahu");
    console.log("Found Contact:", foundContact);
    // Get the all contects
    console.log("Total Number of Contacts:",myAddressBook.getContactCount());
    // Add duplicate contact
    //myAddressBook.addContact(contact3);// Throw an error

    // Searching by City
    const searchCity = "Bhopal";
    console.log(`Contacts in ${searchCity}:`, myAddressBook.searchByCity(searchCity));

    // Searching by State
    const searchState = "Madhya Pradesh";
    console.log(`Contacts in ${searchState}:`, myAddressBook.searchByState(searchState));

    // Get all unique cities and states
    console.log("All Unique Cities:", myAddressBook.getAllCities());
    console.log("All Unique States:", myAddressBook.getAllStates());

    // View persons by city
    console.log("Persons grouped by City:", myAddressBook.viewByCity());

    // View persons by state
    console.log("Persons grouped by State:", myAddressBook.viewByState());

    // Count persons by city
    console.log("Count of persons by City:", myAddressBook.countByCity());

    // Count persons by state
    console.log("Count of persons by State:", myAddressBook.countByState());
    
    console.log(" All Contacts (Before Sorting):");
    myAddressBook.getContacts().forEach(contact => console.log(contact.toString()));

    // Sort contacts alphabetically before printing
    console.log("\n Contacts Sorted by Name:");
    myAddressBook.sortContactsByName().forEach(contact => console.log(contact.toString()));

    // Sort by City
    console.log("\n Contacts Sorted by City:");
    myAddressBook.sortByCity().forEach(contact => console.log(contact.toString()));

    // Sort by State
    console.log("\n Contacts Sorted by State:");
    myAddressBook.sortByState().forEach(contact => console.log(contact.toString()));

    // Sort by Zip Code
    console.log("\n Contacts Sorted by Zip Code:");
    myAddressBook.sortByZip().forEach(contact => console.log(contact.toString()));

} catch (error) {
    console.error("Error:", error.message);
}
