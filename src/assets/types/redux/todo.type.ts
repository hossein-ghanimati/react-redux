import { TodoType } from "../share/todo.type";

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

export type InitialStatesType = {
  todos: TodoType[];
  filteredTodos: TodoType[]
}

export type SetFilteredTodosAction = {
  type: typeof ADD_TODO;
  payload: TodoType[]; 
}

export type AddTodoAction = {
  type: typeof ADD_TODO;
  payload: TodoType; 
}

export type ToggleTodoAction = {
  type: typeof TOGGLE_TODO;
  payload: string; 
}

export type RemoveTodoAction = {
  type: typeof REMOVE_TODO;
  payload: string; 
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction | RemoveTodoAction | SetFilteredTodosAction

export {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
}