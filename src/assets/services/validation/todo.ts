import * as Yup from "yup"

const todoSchema = Yup.object().shape({
  todoText: Yup
    .string()
    .required("Requried ..")
})

export {
  todoSchema
}