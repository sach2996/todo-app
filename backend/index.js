const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.post("/todo", async (req, res) => {
  const reqPayload = req.body;
  const parsePayload = createTodo.safeParse(reqPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      error: "Please pass valid input",
    });
    return;
  }
  console.log(parsePayload);
  const result = await todo.create({
    title: parsePayload.data.title,
    description: parsePayload.data.description,
  });
  console.log("Result - ", result);
  res.status(201).json({
    message: "Todo Created Successfully",
  });
});

app.get("/todos", async (req, res) => {
  const result = await todo.find({});
  console.log("Result - ", result);
  res.status(200).json(result);
});

app.put("completed", async (req, res) => {
  const reqPayload = req.body;
  const parsePayload = updateTodo.safeParse(reqPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      error: "Please pass valid id",
    });
    return;
  }
  await todo.update(
    { _id: parsePayload.data.id },
    {
      completed: true,
    }
  );

  res.status(200).json({
    message: "Todo completed",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port: 3000");
});
