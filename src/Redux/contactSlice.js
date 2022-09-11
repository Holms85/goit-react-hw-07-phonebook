import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};
const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContacts(state, { payload }) {
      state.items.push(payload);
    },
    removeContact(state, { payload }) {
      state.items = state.items.filter(contact => contact.id !== payload);
    },
    filterContact(state, { payload }) {
      state.filter = payload;
    },
  },
});



export const { addContacts, removeContact, filterContact } =
  contactSlice.actions;

export default contactSlice;

// Selector

export const getContacts = ({ contacts }) => contacts.items;
export const getFilteredContact = ({ contacts }) => contacts.filter;
