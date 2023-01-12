import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks";

export const TodoApp = () => {
  
  const { todos, handleDeleteTodo, handleNewTodo, onToggleTodo, todosCount, PedingTodosCount} = useTodo()
  
  return (
    <>
      <h1>TODO APP:</h1>
      <h2><small> Items: {todosCount}, Pendientes: {PedingTodosCount}</small></h2>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo = { onToggleTodo }/>
        </div>

        <div className="col-5">
          <h4>Agragar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={ handleNewTodo }/>
        </div>
      </div>
    </>  
  )
}
