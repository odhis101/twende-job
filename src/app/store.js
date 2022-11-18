import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import goalReducer from '../features/jobs/jobSclice'
import MpesaReducer from '../features/mpesa/mpesaSlices'
import subscriberReducer from '../features/subscriptions/subscriptionSlice'

export const store = configureStore({

  reducer: {
    auth: authReducer,
    jobs: goalReducer,
    mpesa: MpesaReducer,
    subscribers: subscriberReducer,
  },
})