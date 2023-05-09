import { createSlice } from '@reduxjs/toolkit'


export const dogReducer = createSlice({
    name: 'dogs',
    initialState: {
        dogs: [],
        isLoading: false
    },
    reducers: {
        // action creators 
        getDogsFetch: (state) => {
            state.isLoading = true

        },
        getDogsSuccess: (state, action) => {
            state.dogs = action.payload
        },
        getDogsFailure: (state) => {
            state.isLoading = false
        }
    }
})
export const { getDogsFetch, getDogsSuccess, getDogsFailure } = dogReducer.actions;

export default dogReducer.reducer