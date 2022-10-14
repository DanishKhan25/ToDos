import React from "react"

const TodoList = ({ todos, setTodos, setEditTodo, editTodo }) => {
  // complete we use map funtion and if item.id is equal to todo.id then settodo keep item as it is just change complete to !complete and vice versa
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => (item.id === todo.id ? { ...item, completed: !item.completed } : item))
    )
  }

  // handle Edit we are using find method
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id)
    setEditTodo(findTodo)
  }

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
              <i className="fa fa-check-circle"></i>
            </button>
            <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
              <i className="fa fa-edit"></i>
            </button>
            <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  )
}

export default TodoList
