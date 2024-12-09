import TodoList from "@/assets/components/todoList";
import "./App.css"
import FormWrappper from "@/assets/components/form";
const Home = () => (
  <>
    <header>
      <h1>Sabzlearn To Do List</h1>
    </header>
    <FormWrappper/>

    <div className="todo-container">
      <TodoList/>
    </div>
  </>
);

export default Home;
