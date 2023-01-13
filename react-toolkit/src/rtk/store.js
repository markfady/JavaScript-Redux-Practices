import { configureStore} from "@reduxjs/toolkit";
import bankSlice from "../slices/bankSlice";
import  productSlice  from "../slices/productsSlice";
export const store=configureStore({
    reducer:{
        bank:bankSlice,
        product:productSlice
    }
})