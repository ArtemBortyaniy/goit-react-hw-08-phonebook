import { createSelector } from '@reduxjs/toolkit';

export const selectFilters = state => state.filters.status;
export const selectContacts = state => state.contacts.items;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filters) => {
    return contacts.filter(contact => contact.name.includes(filters));
  }
);
