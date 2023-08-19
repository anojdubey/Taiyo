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
    // Define other reducers for editing and deleting contacts
  },
});

export const { addContact } = contactsSlice.actions;
export default contactsSlice.reducer;
