import { CreateErrorType, GetProductsType, StartGetProductsType } from "@/assets/types/redux/productCall.type"
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

const startGetProductCreator = (url: string): StartGetProductsType => ({
  type: "START_GET_PRODUCTS",
  url
})
const getProductsCreator = (products: any): GetProductsType => ({
  type: "GET_PRODUCTS",
  payload: products
})
const errorCreator = (products: any): CreateErrorType => ({
  type: "CREATE_ERROR",
  payload: products
})

export {
  addTodoCreator,
  removeTodoCreator,
  doTodoCreator,
  getProductsCreator,
  errorCreator,
  startGetProductCreator
}