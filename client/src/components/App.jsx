import { useEffect, useState } from "react";
import { NewTodoForm } from "./new-todo-form";
import { TodoList } from "./todoList";
import FilterByCategory from "./filterItems";

function App() {
  // Hooks
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  // Functions

  // Gets data , setTodos(data) and react renders the todos
  const getData = async () => {
    try {
      const response = await fetch("http://localhost:9000/get-todos");
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.log("GET DATA ERROR", error);
    }
  };

  // post
  const postData = async (title, category, description) => {
    const newTodo = {
      id: Math.round(Math.random() * 100000),
      title: title,
      category: category,
      description: description,
      completed: false,
    };
    try {
       await fetch("http://localhost:9000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      });
      getData();
    } catch (error) {
      console.log("POST DATA ERROR", error);
    }
  };

  // put
  const editData = async ({ ...todo }) => {
    try {
      const response = await fetch(`http://localhost:9000/todos/${todo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });
      getData();
    } catch (error) {
      console.log("EDIT DATA ERROR", error);
    }
  };

  // delete
  const deleteData = async (id) => {
    try {
      await fetch(`http://localhost:9000/todos/${id}`, {
        method: "DELETE",
      });
      getData();
    } catch (error) {
      console.log("DELETE DATA ERROR", error);
    }
  };

  // sort todos by category
  const filterCategory = (category) => {
    let filteredArr = [];

    todos.map((todo) => {
      if (todo.category == category) {
        filteredArr.unshift(todo);
      } else {
        filteredArr.push(todo);
      }
    });

    setTodos(filteredArr);
  };

  return (
    <>
      <h1 className="header">Ensolvers Application</h1>
      <NewTodoForm onSubmit={postData} />
      <h2 className="header">TO DO LIST</h2>
      <FilterByCategory todos={todos} filter={filterCategory} />
      <TodoList todos={todos} deleteItem={deleteData} editItem={editData} />
    </>
  );
}

export default App;
