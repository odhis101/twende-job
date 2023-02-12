import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import skillService from './skillsService'

const initialState = {

    skills: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
    }
    // Create new Skill
    export const createSkill = createAsyncThunk(
        'skills/create',
        async (skillData, thunkAPI) => {
            try {
                const token = thunkAPI.getState().auth.user.token
                return await skillService.createSkill(skillData, token)
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
    // Get user Skills
    export const getSkills = createAsyncThunk(
        'skills/getAll',
        async (_, thunkAPI) => {
            try {
                const token = thunkAPI.getState().auth.user.token
                return await skillService.getSkill(token)
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
    export const skillSlice = createSlice({
        name: 'skills',
        initialState,
        reducers: {
            resetSkill: (state) => {
                state.isError = false
                state.isSuccess = false
                state.isLoading = false
                state.message = ''
            }
        },
        extraReducers: {
            [createSkill.pending]: (state) => {
                state.isLoading = true
            },
            [createSkill.fulfilled]: (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload.message
            },
            [createSkill.rejected]: (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            },
            [getSkills.pending]: (state) => {
                state.isLoading = true
            },
            [getSkills.fulfilled]: (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.skills = action.payload
            },
            [getSkills.rejected]: (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            },
        }
    })
    export const { resetSkill } = skillSlice.actions
    export default skillSlice.reducer
