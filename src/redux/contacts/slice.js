import { createSlice } from '@reduxjs/toolkit';
import {
  fethContacts,
  addContacts,
  deleteContacts,
  editContacts,
} from 'redux/contacts/operations';

const handlePendeind = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlise = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    //get
    [fethContacts.pending]: handlePendeind,
    [fethContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fethContacts.rejected]: handleRejected,
    //post
    [addContacts.pending]: handlePendeind,
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContacts.rejected]: handleRejected,
    //delete
    [deleteContacts.pending]: handlePendeind,
    [deleteContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    [deleteContacts.rejected]: handleRejected,
    //edit
    [editContacts.pending]: handlePendeind,
    [editContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.map(item => {
        return item.id === action.payload.id
          ? {
              ...item,
              name: action.payload.name,
              number: action.payload.number,
            }
          : item;
      });
    },
    [editContacts.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlise.reducer;
