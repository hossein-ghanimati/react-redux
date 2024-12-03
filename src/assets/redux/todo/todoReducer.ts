import { CreateErrorType, GetProductsType, StartGetProductsType } from "@/assets/types/redux/productCall.type"
import { TodoActionsType } from "@/assets/types/redux/todo/todoActions.type"

const todoReducer = (state = [], action: TodoActionsType | GetProductsType | CreateErrorType | StartGetProductsType) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, "Add"]
    case "REMOVE_TODO":
      return [...state, "Remove"]
    case "DO_TODO":
      return [...state, "Do"]
    case "GET_PRODUCTS":
      return [...state, ...action.payload]
    case "CREATE_ERROR":
      return [...state, ...action.payload]
  
    default:
      return state
  }
}

export default todoReducer