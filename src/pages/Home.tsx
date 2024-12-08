import { TodoType } from "@/assets/types/share/todo.type"
import { connect, DispatchProp } from "react-redux"
import { UnknownAction } from "redux";

type HomeProps = {
  todos: TodoType[];
} & DispatchProp<UnknownAction>
const Home = (props: HomeProps) => {
  console.log(props)
  return <div>
dsfgsdfg
  </div>
}

const mapStateToProps = (state: {todos: TodoType[]}) => ({
  todos: state.todos
})

export default connect(mapStateToProps)(Home)