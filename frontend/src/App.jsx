import { useEffect, useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { ToDo } from "./components/ToDo";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todos").then(async (res) => {
      const response = await res.json();
      console.log(response);
      setTodos(response);
    });
  }, []);
  return (
    <>
      <CreateTodo />
      <ToDo todos={todos} />
    </>
  );
}

export default App;
