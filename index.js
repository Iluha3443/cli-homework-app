import * as ContactsService from "./db/contacts.js"
import { program } from "commander";

const invokeAction = async ({ action, id, name, email, phone }) => {
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
};

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();
invokeAction(argv);