import { TodoActionsType } from "@/assets/types/redux/todo/todoActions.type"


const addTodoCreator = (data: any) : TodoActionsType & {
  payload: any
} => ({
  type: "ADD_TODO",
  payload: data
})
const removeTodoCreator = (id: string) : TodoActionsType & {
  id: string
} => ({
  type: "REMOVE_TODO",
  id
})
const doTodoCreator = (id: string) : TodoActionsType & {
  id: string
} =>  ({
  type: "DO_TODO",
  id
})

export {
  addTodoCreator,
  removeTodoCreator,
  doTodoCreator
}