
import { addTodoAction } from "@/assets/redux/todo";
import { createTodoData } from "@/assets/ts/todo";
import { RootStates } from "@/assets/types/redux/sotre";
import {  useDispatch, useSelector } from "react-redux"


const Home = () => {
  const dispatch = useDispatch();
  const todos = useSelector((states: RootStates) => states.todos)

  const addTodo = () =>
    dispatch(addTodoAction(createTodoData()))
  
  return <div onClick={addTodo}>
    {
      todos.length
    }
  </div>
}



export default Home