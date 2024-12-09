import { TodoType } from "../share/todo.type";

export const ALL = 'ALL';
export const COMPLETED = 'COMPLETED';
export const INCOMPLETED = 'INCOMPLETED';

export type InitialType = TodoType[]

export type AllAction = {
  type: typeof ALL;
  payload: "all"
}

export type CompletedAction = {
  type: typeof COMPLETED;
  payload: "completed"
}

export type InCompletedAction = {
  type: typeof INCOMPLETED;
  payload: "incompleted"
}

export type FilterTypes = "all" | "completed" | "incompleted"
export type filterActionTypes = AllAction | CompletedAction | InCompletedAction

