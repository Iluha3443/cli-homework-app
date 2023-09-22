import * as ContactsService from "./db/contacts.js"
import yargs from "yargs"

const invokeAction = async({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
          const contacts = await ContactsService.listContacts();
          console.log(contacts)
      break;

    case 'get':
      const contactsId = await ContactsService.getContactById(id);
          console.log(contactsId)
      break;

    case 'add':
     const addContact = await ContactsService.addContact(name, email, phone);
          console.log(addContact)
      break;

    case 'remove':
       const removeContact = await ContactsService.removeContact(id);
          console.log(removeContact)
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction({action: "remove",id: "VGN-kGiGwNzi0ookCKrTr"})