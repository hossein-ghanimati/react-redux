import { CounterActionsType } from "@/assets/types/redux/counter/counterActions.type"
const counterReducer = (state: number = 0, action: CounterActionsType): number => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

export default counterReducer