import { combineReducers, legacy_createStore } from "redux"
import todoReducer from "./todo/todoReducer"
import counterReducer from "./counter/counterReducer"

const sotre = legacy_createStore(combineReducers({
  count: counterReducer,
  todos: todoReducer
}))

export default sotre