import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserByEmail, createUser } from '../../services/api';

const stored = localStorage.getItem('user');

const initialState = {
  user: stored ? JSON.parse(stored) : null,
  loading: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const { data: existing } = await getUserByEmail(email);
      if (existing.length > 0) return rejectWithValue('Email already registered');
      const { data } = await createUser({ name, email, password });
      return data;
    } catch (e) {
      return rejectWithValue(e.message || 'Registration failed');
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await getUserByEmail(email);
      if (data.length === 0) return rejectWithValue('User not found');
      const user = data[0];
      if (user.password !== password) return rejectWithValue('Invalid password');
      const safeUser = { id: user.id, name: user.name, email: user.email };
      localStorage.setItem('user', JSON.stringify(safeUser));
      return safeUser;
    } catch (e) {
      return rejectWithValue(e.message || 'Login failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
  extraReducers: (b) => {
    b.addCase(registerUser.pending, (s) => { s.loading = true; s.error = null; })
     .addCase(registerUser.fulfilled, (s) => { s.loading = false; })
     .addCase(registerUser.rejected, (s, a) => { s.loading = false; s.error = a.payload; })
     .addCase(loginUser.pending, (s) => { s.loading = true; s.error = null; })
     .addCase(loginUser.fulfilled, (s, a) => { s.loading = false; s.user = a.payload; })
     .addCase(loginUser.rejected, (s, a) => { s.loading = false; s.error = a.payload; });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
