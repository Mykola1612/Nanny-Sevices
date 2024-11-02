import { createSlice } from '@reduxjs/toolkit';
import { signInThunk, signOutThunk, signUpThunk } from './authOperations';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import {
  handleFulfilledSignUp,
  handleFulfilledSignOut,
  handleFulfilledSignIn,
} from './authFunctionsReducer';

const instance = axios.create({
  baseURL: 'https://Nanny-Sevices/',
});

export const setAuthToken = (token) => {
  instance.defaults.headers.common.authorization = `Bearer ${token}`;
};

import { initialState } from './authInitialState';
import axios from 'axios';
const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(signUpThunk.fulfilled, handleFulfilledSignUp)
      .addCase(signInThunk.fulfilled, handleFulfilledSignIn)
      .addCase(signOutThunk.fulfilled, handleFulfilledSignOut);
  },
});

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken'],
};

export const { setToken } = authSlice.actions;
export const authReducer = persistReducer(authConfig, authSlice.reducer);
