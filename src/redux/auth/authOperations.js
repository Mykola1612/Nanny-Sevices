import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { toast } from 'react-toastify';
import { setAuthToken } from './authReducer';
import auth from '../../firebase';

export const signUpThunk = createAsyncThunk(
  'auth/signup',
  async (formData, thunkApi) => {
    console.log(auth);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        formData.Email,
        formData.Password
      );

      await updateProfile(user, {
        displayName: formData.Name,
      });

      const newUser = {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        accessToken: user.accessToken,
        refreshToken: user.stsTokenManager.refreshToken,
      };

      setAuthToken(user.accessToken);
      // setUser(newUser);

      return newUser;
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
