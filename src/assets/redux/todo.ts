import { ADD_TODO, AddTodoAction, InitialType, REMOVE_TODO, RemoveTodoAction, TodoActionTypes, TOGGLE_TODO, ToggleTodoAction } from "../types/redux/todo.type";
import { TodoType } from "../types/share/todo.type";



const todoReducer = (state: InitialType | undefined = [], action: TodoActionTypes) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]

    case REMOVE_TODO:
      return [...state].filter(todo => todo.id !== action.payload)

    case TOGGLE_TODO:
      return [...state].map(todo => {     
        if(todo.id === action.payload)
          todo.completed = !todo.completed
        return todo
      })
      
  
    default:
      return state;
  }
}


export const addTodo = (newTodo: TodoType): AddTodoAction => ({
  type: ADD_TODO,
  payload: newTodo,
});

export const toggleTodo = (id: string): ToggleTodoAction => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const removeTodo = (id: string): RemoveTodoAction => ({
  type: REMOVE_TODO,
  payload: id,
});


export default todoReducer