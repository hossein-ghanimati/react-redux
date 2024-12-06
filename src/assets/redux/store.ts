import { applyMiddleware, combineReducers, createStore } from "redux"
import todoReducer from "./todo/todoReducer"
import counterReducer from "./counter/counterReducer"
// import logger from "./middleWares/logger"
import { configureStore } from "@reduxjs/toolkit"
import productCall from "./middleWares/productsCall"
import { getProductsCreator, startGetProductCreator } from "./todo/todoActionsCreator"

import {thunk} from "redux-thunk"
import sendApiReq from "../services/axios/configs/apiReq"
import {createLogger} from 'redux-logger'

const logger = createLogger({
  level: "warn",
})

const store = createStore(
  combineReducers({
    todos: todoReducer,
    count: counterReducer
  }),
  applyMiddleware(thunk, logger)
)

store.dispatch(getProductsCreator([1, 2]))

store.dispatch(async (dispatch) => {
  const response = await sendApiReq()("/todos");
  dispatch(getProductsCreator(response.data))
})


export default store