import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from 'components/service/api'

export const fetchContacts = createAsyncThunk(
    'contacts/fetch',
    async (_, thunkAPI) => {
        try {
            const data = await api.getContacts();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/add',
    async (store, thunkAPI) => {
        try {
            
        } catch (error) {
            
        }
    }
);

export const removeContact = createAsyncThunk(
    'contacts/remove',
    async (store, thunkAPI) => {
        try {
            
        } catch (error) {
            
        }
    }
);