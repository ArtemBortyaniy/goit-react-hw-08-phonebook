import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './features/contactSlice';
import { filtersReducer } from './features/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
