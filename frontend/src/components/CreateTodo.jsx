import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState();
  const [description, setDecription] = useState();

  function handleClick() {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then(async (res) => {
        const response = await res.json();
        alert("Todo Added");
        setTitle("");
        setDecription("");
      })
      .catch((err) => {
        console.error("Error -", err);
      });
  }
  return (
    <div>
      <input
        id="title"
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Enter title here"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <br />
      <input
        id="descr"
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Enter description here"
        onChange={(e) => {
          setDecription(e.target.value);
        }}
      ></input>
      <br />
      <button style={{ padding: 10, margin: 10 }} onClick={handleClick}>
        Add ToDo
      </button>
    </div>
  );
}
