// src/features/contacts/contactsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
  id: number;
  fname: string;
  lname: string;
  status: string;
  // Other contact fields
}

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [
    {
      id: 1,
      fname: 'John',
      lname: 'Smith',
      status: 'active',
    },
    {
      id: 2,
      fname: 'Jane',
      lname: 'Doe',
      status: 'active',
    },
    {
      id: 3,
      fname: 'Bob',
      lname: 'Johnson',
      status: 'inactive',
    }
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const { id, fname, lname, status } = action.payload;
      const existingContact = state.contacts.find(contact => contact.id === id);
      if (existingContact) {
        existingContact.fname = fname;
        existingContact.lname = lname;
        existingContact.status = status;
      }
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    }
  },
});

export const { addContact ,editContact,deleteContact} = contactsSlice.actions;
export default contactsSlice.reducer;
