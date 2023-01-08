import { bankReducer} from "./reducers/bankReducer";
import { productReducer } from "./reducers/productReducer";
import {createStore , combineReducers } from "redux" //This is deprecated, we use confiqure store from Redux-Toolkit

//Each one of them is called using (useSelector hook)
const app= combineReducers({
    bank:bankReducer,
    product:productReducer
})
export const store=createStore(app);