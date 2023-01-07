import { bankReducer } from "./reducers/reducers";
import {createStore} from "redux" //This is deprecated, we use confiqure store from Redux-Toolkit

export const store=createStore(bankReducer);