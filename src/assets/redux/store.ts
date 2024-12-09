import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import todoReducer from "./todo";
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from "redux-thunk";


const rootReducer = combineReducers({
  todos: todoReducer,
});

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store