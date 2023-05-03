import { configureStore } from '@reduxjs/toolkit'
import { FunctionalDescriptionReducer } from '../reducers/functionalDescriptionReducer'

export default configureStore({
    reducer: {
        functionalDescriptionReducer: FunctionalDescriptionReducer.reducer,
    },
})