import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import goalReducer from '../features/jobs/jobSclice'
import MpesaReducer from '../features/mpesa/mpesaSlices'
import subscriberReducer from '../features/subscriptions/subscriptionSlice'
import updateUserReducer from '../features/updateUser/updateUserSlice'
import skillReducer from '../features/skills/skillSlice'

export const store = configureStore({

  reducer: {
    
    jobs: goalReducer,
    mpesa: MpesaReducer,
    subscriber: subscriberReducer,
    auth: authReducer,
    update: updateUserReducer,
    skills: skillReducer,


  },
})