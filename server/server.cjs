const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pool = require("./db.cjs");
const port = process.env.PORT ?? 9000;
const hostname = "localhost";

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//block cors
app.use(cors());

// Get Todos
app.get("/get-todos", async (request, response) => {
  try {
    const todos = await pool.query("SELECT * FROM todos ORDER BY utc desc");
    response.json(todos.rows);
  } catch (error) {}
});

// Add todo
app.post("/todos", async (request, response) => {
  const { id, title, category, description, completed } = request.body;
  try {
    const newTodo = await pool.query(
      "INSERT INTO todos(id, title, category, description, completed) VALUES($1, $2, $3, $4, $5)",
      [id, title, category, description, completed]
    );

    response.json(newTodo);
  } catch (error) {
    console.log("POST ERROR", error);
  }
});

// Update todo
app.put("/todos/:id", async (request, response) => {
  const { id } = request.params;
  const { title, category, description, completed } = request.body;
  try {
    const updatedTodo = await pool.query(
      "UPDATE todos SET title = $1, category = $2, description = $3, completed = $4 WHERE id = $5",
      [title, category, description, completed, id]
    );
    response.json(updatedTodo);
  } catch (error) {
    console.log("PUT ERROR", error);
  }
});

//Delete todo
app.delete("/todos/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const deleteTodo = await pool.query("DELETE FROM todos WHERE id = $1", [
      id,
    ]);
    response.json(deleteTodo);
  } catch (error) {
    console.log("DELETE ERROR", error);
  }
});

// listen
app.listen(port, hostname, console.log("Server started on port 9000"));

