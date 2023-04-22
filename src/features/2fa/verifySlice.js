import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVerified: false,
};

export const verifySlice = createSlice({
  name: 'verify',
  initialState,
  reducers: {
    setVerified: (state, action) => {
      state.isVerified = action.payload;
    },
  },
});

export const { setVerified } = verifySlice.actions;

export default verifySlice.reducer;
