import { createSlice } from '@reduxjs/toolkit'
export const FunctionalDescriptionReducer = createSlice({
    name: "FunctionalDescriptionReducer",
    initialState: [{}],
    reducers: {
        addData: (state, action) => {
            let obj = state;
            obj = { ...action.payload }
            state[action.payload.index] = obj
        },
        addForm: (state, action) => {
            state.push({})
        }
    }
})
export const { addData, addForm } = FunctionalDescriptionReducer.actions