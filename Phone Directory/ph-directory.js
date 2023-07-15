class PhoneDirectory {
    constructor() {
      this.contactsByNumber = {};  // Hash table to store contacts by phone number
      this.contactsByName = {};    // Hash table to store contacts by name
    }
    // Insert a contact into the phone directory
    insertContact(name, phoneNumber) {
      const contact = { name, phoneNumber };
      this.contactsByNumber[phoneNumber] = contact;
      this.contactsByName[name] = contact;
    }
    // Delete a contact from the phone directory
    deleteContact(phoneNumber) {
      const contact = this.contactsByNumber[phoneNumber];
      if (contact) {
        delete this.contactsByNumber[phoneNumber];
        delete this.contactsByName[contact.name];
      }
    }
    // Search for contacts by name
    searchByName(name) {
      const contact = this.contactsByName[name];
      return contact ? [contact] : [];
    }
    // Search for contacts by phone number
    searchByNumber(phoneNumber) {
      const contact = this.contactsByNumber[phoneNumber];
      return contact ? [contact] : [];
    }
  }
  const phoneDirectory = new PhoneDirectory();

  // Inserting contacts
  phoneDirectory.insertContact('Harry Potter', '1234567890');
  phoneDirectory.insertContact('Ron Weasley', '9876543210');
  phoneDirectory.insertContact('Hermione Granger', '5555555555');
  phoneDirectory.insertContact('Draco Malfoy', '9999999999');

  // Searching contacts by name
  console.log("Searching contacts by name -> ");
  console.log(phoneDirectory.searchByName('Ron Weasley'));
  console.log(phoneDirectory.searchByName('Draco Malfoy'));
  console.log(phoneDirectory.searchByName('Hermione Granger'),'\n\n');

  // Searching contacts by phone number
  console.log("Searching contacts by phone number -> ");
  console.log(phoneDirectory.searchByNumber('9876543210'));
  console.log(phoneDirectory.searchByNumber('5555555555'));
  console.log(phoneDirectory.searchByNumber('1111111111'),'\n\n');

  // Deleting a contact
  phoneDirectory.deleteContact('9876543210');
  console.log(phoneDirectory.searchByNumber('9876543210'));

  // Searching deleted contact
    console.log("Searching deleted contact ->");
  console.log(phoneDirectory.searchByName('Ron Weasley'),'\n\n');

  // Inserting a new contact
  phoneDirectory.insertContact('Pravati Patil', '7777777777');

  // Searching the newly inserted contact
  console.log("Searching the newly inserted contact -> ");
  console.log(phoneDirectory.searchByNumber('7777777777'),'\n\n');