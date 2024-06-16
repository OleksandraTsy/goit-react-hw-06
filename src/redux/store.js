import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import filterReducer from './filtersSlice';
import contactsReducer from "./contactsSlice";


const persistedContactsReducer = persistReducer(
  {
    key: 'userContacts',
    storage,
    whitelist: ['items'],
  },
  contactsReducer,
);

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filter: filterReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]}})
});

export const persistor = persistStore(store);