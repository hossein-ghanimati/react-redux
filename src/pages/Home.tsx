import { addTodoAction } from "@/assets/redux/todo";
import { createTodoData } from "@/assets/ts/todo";
import { TodoType } from "@/assets/types/share/todo.type"
import { connect, DispatchProp } from "react-redux"
import { Dispatch, UnknownAction } from "redux";

type HomeProps = {
  todos: TodoType[];
} & DispatchProp<UnknownAction> & {
  addTodo: () => void;
}
const Home = (props: HomeProps) => {
  console.log(props)
  
  return <div onClick={props.addTodo}>
dsfgsdfg
  </div>
}

const mapStateToProps = (state: {todos: TodoType[]}) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addTodo: () => 
    dispatch(addTodoAction(createTodoData()))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)