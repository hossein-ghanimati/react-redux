import { CounterActionsType } from "@/assets/types/redux/counter/counterActions.type"
const counterReducer = (state = 0, action: CounterActionsType) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state - 1
    case "RESET":
      return 0
  
    default:
      return state
  }
}

export default counterReducer