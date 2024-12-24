import {configureStore} from '@reduxjs/toolkit'
import { cartSlice } from './cart';

const store =configureStore({
    reducer:{
        cartReducer:cartSlice.reducer
    }
})


export default store;