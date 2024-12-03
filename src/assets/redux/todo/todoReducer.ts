import { TodoActionsType } from "@/assets/types/redux/todo/todoActions.type"

const todoReducer = (state = [], action: TodoActionsType) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, "Add"]
    case "REMOVE_TODO":
      return [...state, "Remove"]
    case "DO_TODO":
      return [...state, "Do"]
  
    default:
      return state
  }
}

export default todoReducer