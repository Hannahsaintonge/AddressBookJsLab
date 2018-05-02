"use strict";
{





class AddressBook {
    constructor() {
        this.contacts = [
          new Contact("hannah", "email@email.com", "555-555-5555", "classmate"),
          new Contact("dog", "hannahsemail@hannah.com", "911-911-9911", "classmate"),
          new Contact("cat", "yingyang@email.com", "444-333-1212", "classmate")
        ];
    }
    add(info) {
        const addedContact = new Contact(info.name, info.email, info.phone, info.relation);
        this.contacts.push(addedContact);
    }

    deleteAt(index) {
      this.contacts.splice(index, 1);
    }

    print(){
      console.log(this.contacts);

    }

}

class Contact {
    constructor(name, email, phone, relation) {

        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

const myAddressBook = new AddressBook();

console.log(myAddressBook);

while (true) {
    let userInput = prompt("Would you like to add, delete, print, or quit?");
    let userInputLowerCase = userInput.toLowerCase();
   if(userInputLowerCase === "add"){
    console.log("selected add");

    const info = {
        name: prompt("Name?"),
        phone: prompt("Phone?"),
        email: prompt("Email?"),
        relation: prompt("Relation?")
    };

    myAddressBook.add(info);
    console.log(myAddressBook);

   } else if (userInputLowerCase === "delete") {
       const index = prompt("Select the number of the index you want to delete?");
       myAddressBook.deleteAt(index);
       console.log(myAddressBook);
       console.log("selected delete");

   } else if (userInputLowerCase === "print") {

       for (let i = 0; i < myAddressBook.contacts.length; i++) {
           console.log(myAddressBook.contacts[i]);
           break;

       }

   } else if (userInputLowerCase === "quit") {
        console.log("selected quit");
        break;
   } else {
        console.log("invalid input");
        continue;
    }
}








}

