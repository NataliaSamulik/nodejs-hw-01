import { PATH_DB } from '../contacts/contacts.js';
import fs from 'fs/promises';

import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const getArrayContacts = await fs.readFile(PATH_DB, 'utf8');
    const newContact= createFakeContact();
    const newArrayContacts = JSON.parse(getArrayContacts).concat(newContact);

    const data = await fs.writeFile(
      PATH_DB,
      JSON.stringify(newArrayContacts, null, 2),
      'utf8',
    );
  } catch (err) {
    console.error('Write error', err);
  }
};

await addOneContact();


