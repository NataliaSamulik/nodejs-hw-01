import { PATH_DB } from '../contacts/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    const removeContacts = await fs.writeFile(
      PATH_DB,
      JSON.stringify([]),
      'utf8',
    );
  } catch (err) {
    console.error('Write error', err);
  }
};

await removeAllContacts();
