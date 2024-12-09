import { ADD_TODO, InitialStatesType,  AddTodoAction, REMOVE_TODO, RemoveTodoAction, TodoActionTypes, TOGGLE_TODO, ToggleTodoAction } from "../types/redux/todo.type";
import { TodoType } from "../types/share/todo.type";

const initialStates: InitialStatesType = {
  todos: [],
  filteredTodos: []
}

const todoReducer = (state = initialStates, action: TodoActionTypes) => {
  const todosCopy = [...initialStates.todos];
  const filteredTodosCopy = [...initialStates.filteredTodos];
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


export const addTodoAction = (newTodo: TodoType): AddTodoAction => ({
  type: ADD_TODO,
  payload: newTodo,
});

export const toggleTodoAction = (id: string): ToggleTodoAction => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const removeTodoAction = (id: string): RemoveTodoAction => ({
  type: REMOVE_TODO,
  payload: id,
});


export default todoReducer