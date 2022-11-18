import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import subscriptionService from './subscriptionServices'
const initialState = {
  subscribers: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}
export const getSubscriptions = createAsyncThunk(
    'subscribers/getAll',
    async (_, thunkAPI) => {
      try {
       
        console.log('lol you are smart  ')
        console.log(subscriptionService.subscribers())
        
        return await subscriptionService.subscribers()
      } catch (error) {
        console.log('lol you are crazy ')
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

  export const subscriptionSlice = createSlice({
    name: 'subscribers',
    initialState,
    reducers: {
      reset: (state) => initialState,
    }, extraReducers: (builder) => {
        builder
          .addCase(getSubscriptions.pending, (state) => {
            state.isLoading = true
          })
          .addCase(getSubscriptions.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            //console.log('what does this do ',action.payload)
            //state.mpesa.push(action.payload)
          })
          .addCase(getSubscriptions.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          })
        }
    })

console.log(subscriptionSlice)
    export const { reset } = subscriptionSlice.actions
    export default subscriptionSlice.reducer