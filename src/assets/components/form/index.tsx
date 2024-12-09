import { addTodoAction } from '@/assets/redux/todo'
import { todoSchema } from '@/assets/services/validation/todo'
import { createTodoData } from '@/assets/ts/todo'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'

const FormWrappper = () => {

  const dispatch = useDispatch();

  return (
    <Formik
      validationSchema={todoSchema}
      onSubmit={(values, actions) => {
        dispatch(
          addTodoAction(
            createTodoData(
              values.todoText.trim()
            )
          )
        )
        actions.resetForm()
      }}
      initialValues={
        {todoText : ""}
      }
    >
      {({errors}) => (
        <Form>
          <Field name='todoText' type="text" placeholder={errors.todoText || "Enter Todo Title"} className={`todo-input ${errors.todoText && "placeholder:text-red-500"}`} />
          <button className="todo-button" type="submit">
            <i className="fas fa-plus-circle fa-lg"></i>
          </button>
          <div className="select">
            <select name="todos" className="filter-todo">
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="incomplete">Incomplete</option>
            </select>
          </div>
        </Form>
      )}

    </Formik>
  )
}

export default FormWrappper