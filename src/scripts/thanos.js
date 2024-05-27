import { PATH_DB } from '../contacts/contacts.js';
import fs from 'fs/promises';
export const thanos = async () => {
  try {
    const getContacts = await fs.readFile(PATH_DB, 'utf8');
    const arrayContacts = JSON.parse(getContacts);

    const newArrayContacts = arrayContacts.filter(
      (contact) => Math.random() >= 0.5,
    );

    const data = await fs.writeFile(
      PATH_DB,
      JSON.stringify(newArrayContacts, null, 2),
    );

    console.log(arrayContacts);
  } catch (err) {
    console.error('Write error', err);
  }
};

await thanos();

