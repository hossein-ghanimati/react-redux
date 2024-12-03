import { TodoActionsType } from "@/assets/types/redux/todo/todoActions.type"

const todoReducer = (state: number = 0, action: TodoActionsType): number => {
  switch (action.type) {
    case "ADD_TODO":
      return state + 1
    case "REMOVE_TODO":
      return state - 1
    case "DO_TODO":
      return 0
  
    default:
      return state
  }
}

export default todoReducer