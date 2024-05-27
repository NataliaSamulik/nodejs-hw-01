import { PATH_DB } from '../contacts/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(data).length;
  } catch (err) {
    console.error(err);
  }
};

console.log(await countContacts());
