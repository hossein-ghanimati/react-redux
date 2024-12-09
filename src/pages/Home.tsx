import TodoList from "@/assets/components/todoList";
import "./App.css"
const Home = () => (
  <>
    <header>
      <h1>Sabzlearn To Do List</h1>
    </header>
    <form action="">
      <input type="text" className="todo-input" />
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
    </form>

    <div className="todo-container">
      <TodoList/>
    </div>
  </>
);

export default Home;
