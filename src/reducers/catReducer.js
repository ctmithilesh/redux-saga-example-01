import { createSlice } from '@reduxjs/toolkit'


export const catReducer = createSlice({
    name: 'cats',
    initialState: {
        cats: [],
        isLoading: false
    },
    reducers: {
        // action creators 
        getCatsFetch: (state) => {
            state.isLoading = true

        },
        getCatsSuccess: (state, action) => {
            state.cats = action.payload
        },
        getCatsFailure: (state) => {
            state.isLoading = false
        }
    }
})
export const { getCatsFetch, getCatsSuccess, getCatsFailure } = catReducer.actions;

export default catReducer.reducer