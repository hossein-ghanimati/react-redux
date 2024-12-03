import { applyMiddleware, combineReducers, createStore } from "redux"
import todoReducer from "./todo/todoReducer"
import counterReducer from "./counter/counterReducer"
import logger from "./middleWares/logger"
import { configureStore } from "@reduxjs/toolkit"
import productCall from "./middleWares/productsCall"
import { startGetProductCreator } from "./todo/todoActionsCreator"

const store = createStore(
  combineReducers({
    todos: todoReducer,
    count: counterReducer
  }),
  applyMiddleware(productCall, logger)
)

store.dispatch(startGetProductCreator("/todos"))


export default store