import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import API, { setAuthToken } from 'services/axios';

export const signUpThunk = createAsyncThunk(
  'auth/signup',
  async (formData, thunkApi) => {
    try {
      const { data } = await API.post('/auth/signup', formData);
      localStorage.removeItem('signUp');
      setAuthToken(data.accessToken);
      return data;
    } catch (error) {
      toast.error(`We're sorry, something went wrong`);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
