/* eslint-disable react/prop-types */
export function ToDo({ todos }) {
  return (
    <>
      {todos.map((todo, index) => (
        <div key={index}>
          <h5>{todo.title}</h5>
          <p> {todo.description}</p>
          <button>
            {" "}
            {todo.completed == true ? "Completed" : "Mark as Completed"}
          </button>
        </div>
      ))}
    </>
  );
}
