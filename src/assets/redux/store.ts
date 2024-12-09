import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import todoReducer from "./todo";
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from "redux-thunk";
import filterModeReducer from "./filterMode";
import logger from "redux-logger";


const rootReducer = combineReducers({
  todos: todoReducer,
  filterMode: filterModeReducer
});

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
)

export default store