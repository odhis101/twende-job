

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import updateUserService from './updateUserService'

const initialState = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
  }
export const updateUser = createAsyncThunk('auth/update', async (user, thunkAPI) => {
    try {
      return await updateUserService.updateUser(user)
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  })


  export const updateSlice = createSlice({
    name: 'update',
    initialState,
    reducers: {
      reset: (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = false
        state.message = ''
      },
    },
    extraReducers: (builder) => {
      builder

        .addCase(updateUser.pending, (state) => {
          state.isLoading = true
        })
        .addCase(updateUser.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
        
        })
        .addCase(updateUser.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
  
    },
  })
  
  export const { reset } = updateSlice.actions
  export default updateSlice.reducer