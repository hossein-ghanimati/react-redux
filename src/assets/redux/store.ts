import { applyMiddleware, combineReducers, createStore } from "redux"
import todoReducer from "./todo/todoReducer"
import counterReducer from "./counter/counterReducer"
import logger from "./middleWares/logger"
import { configureStore } from "@reduxjs/toolkit"

const store = createStore(
  combineReducers({
    todos: todoReducer,
    count: counterReducer
  }),
  applyMiddleware(logger)
)

export default store