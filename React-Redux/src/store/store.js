import { bankReducer } from "./reducers/reducers";
import {createStore} from "redux"

export const store=createStore(bankReducer);