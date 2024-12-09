import { addTodoAction } from '@/assets/redux/todo'
import { todoSchema } from '@/assets/services/validation/todo'
import { createTodoData } from '@/assets/ts/todo'
import { Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import SelectBox from './SelectBox'

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
            <SelectBox/>
          </div>
        </Form>
      )}

    </Formik>
  )
}

export default FormWrappper