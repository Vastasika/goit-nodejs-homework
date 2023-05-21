const fs = require("fs/promises");
const path = require("path");

 const contactsPath = path.join(__dirname, "db/contacts.json");

 const listContacts = async () => {
     const data = await fs.readFile(contactsPath);
     return JSON.parse(data);
   }

const getContactById = async (contactId) => {
    const contacts = await listContacts();
    const result = contacts.find(item => item.id === contactId);
    return result || null;
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    }