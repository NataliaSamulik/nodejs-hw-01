import fs from 'fs/promises';

import { PATH_DB } from '../contacts/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const getArrayContacts = await fs.readFile(PATH_DB, 'utf8');
    const newArrayContacts = [];

    for (let i = 0; i < number; i++) {
      const newContact = createFakeContact();
      newArrayContacts.push(newContact);
    }

    const arrayUsers = JSON.parse(getArrayContacts).concat(newArrayContacts);

    const data = await fs.writeFile(
      PATH_DB,
      JSON.stringify(arrayUsers, null, 2),
      'utf8',
    );
  } catch (err) {
    console.error('Write error', err);
  }
};

await generateContacts(5);
