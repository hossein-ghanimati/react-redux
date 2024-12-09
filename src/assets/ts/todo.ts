import { TodoType } from "../types/share/todo.type";

export const createTodoData = (): TodoType => ({
  id: crypto.randomUUID(),
  text: "Todo Text ...",
  completed: false,
  createdAt: (new Date()).toLocaleString()
})