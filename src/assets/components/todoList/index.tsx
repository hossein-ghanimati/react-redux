import { removeTodoAction, toggleTodoAction } from '@/assets/redux/todo';
import { RootStates } from '@/assets/types/redux/sotre.type';
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((states: RootStates) => states.todos)
  
  const removeTodo = useCallback((id: string) => (
    dispatch(
      removeTodoAction(
        id
      )
    )
  ), [])

  const toggleTodo = useCallback((id: string) => (
    dispatch(
      toggleTodoAction(
        id
      )
    )
  ), [])
  return (
    <ul className="todo-list">
      {
        todos.map(todo => 
          <li key={todo.id} className='todo-item'>
            {todo.text}
            <button className="complete" onClick={() => toggleTodo(todo.id)}>
              Complete
            </button>
            <button className="remove" onClick={() => removeTodo(todo.id)}>
              Remvove
            </button>
          </li>
        )
      }
    </ul>
  )
}

export default TodoList