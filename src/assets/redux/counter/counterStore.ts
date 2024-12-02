import { legacy_createStore } from "redux"
import counterReducer from "./counterReducer"

const counterStore = legacy_createStore(counterReducer)

export default counterStore