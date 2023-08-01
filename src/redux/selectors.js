import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFilters = state => state.filters.status;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.erorr;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filters) => {
    return contacts.filter(contact => contact.name.includes(filters));
  }
);
