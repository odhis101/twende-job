import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import mpesaService from './mpesaServices'

const initialState = {
    amount:'',
    number: ''
  }

  export const MpesaService = createAsyncThunk(
    'mpesa/create',
    async (mpesadata, thunkAPI) => {
        try { 
            const token = thunkAPI.getState().auth.user.token
            return await mpesaService.mpesaServices(mpesadata,token)
    }
    catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
    )

    export const mpesaSlice = createSlice({
        name: 'mpesa',
        initialState,
        reducers: {
          reset: (state) => initialState,
        }, extraReducers: (builder) => {
            builder
              .addCase(MpesaService.pending, (state) => {
                state.isLoading = true
              })
              .addCase(MpesaService.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                //console.log('what does this do ',action.payload)
                //state.mpesa.push(action.payload)
              })
              .addCase(MpesaService.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
              })
            }
        })


        export const { reset } = mpesaSlice.actions
        export default mpesaSlice.reducer