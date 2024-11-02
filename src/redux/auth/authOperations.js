import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../../main';
import { setAuthToken } from './authSlice';

export const signUpThunk = createAsyncThunk(
  'auth/signup',
  async (formData, thunkApi) => {
    console.log(formData);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        formData.Email,
        formData.Password
      );

      setAuthToken(user.accessToken);

      const data = {
        uid: user.uid,
        email: user.email,
        accessToken: user.accessToken,
        refreshToken: user.stsTokenManager.refreshToken,
      };
      console.log(user);

      return data;
    } catch (error) {
      toast.error(`We're sorry, something went wrong`);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const signInThunk = createAsyncThunk(
  'auth/signin',
  async (formData, thunkApi) => {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        formData.Email,
        formData.Password
      );

      const data = {
        uid: user.uid,
        email: user.email,
        accessToken: user.accessToken,
        refreshToken: user.stsTokenManager.refreshToken,
      };
      console.log(user);
      setAuthToken(user.accessToken);

      return data;
    } catch (error) {
      toast.error(`We're sorry, something went wrong`);
      console.log(`We're sorry, something went wrong`);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const signOutThunk = createAsyncThunk(
  'auth/signout',
  async (_, thunkApi) => {
    try {
      signOut(auth);
    } catch (error) {
      toast.error(`We're sorry, something went wrong`);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
