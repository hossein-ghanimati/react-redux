import { CounterActionsType } from "@/assets/types/redux/counter/counterActions.type"

const incrementCreator = () : CounterActionsType => ({
  type: "INCREMENT",
})
const decrementCreator = () : CounterActionsType => ({
  type: "DECREMENT",
})
const resetCreator = () : CounterActionsType => ({
  type: "RESET",
})

export {
  incrementCreator,
  decrementCreator,
  resetCreator
}