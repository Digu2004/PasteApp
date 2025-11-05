import { configureStore } from "@reduxjs/toolkit";
import pasteReducer from '../features/slice.jsx'

export const store=configureStore({
    reducer:{
        paste:pasteReducer,
    },
})