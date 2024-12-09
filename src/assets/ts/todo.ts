import { TodoType } from "../types/share/todo.type";

export const createTodoData = (text: string): TodoType => ({
  id: crypto.randomUUID(),
  text,
  completed: false,
  createdAt: (new Date()).toLocaleString()
})