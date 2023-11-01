import { useEffect, useState } from "react";
import { NewTodoForm } from "./new-todo-form";
import { TodoList } from "./todoList";
import FilterItems from "./filterItems";
// import { todos as todosServer } from "../server/express";

function App() {
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    // localStorage.setItem("ITEMS", JSON.stringify(todos));
    getData();
  }, []);

  // Gets data , setTodos(data) and react renders todos
  const getData = async () => {
    try {
      const response = await fetch("http://localhost:9000/get-todos");
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.log("GET DATA ERROR", error);
    }
  };

  const postData = async (title, category, description) => {
    const newTodo = {
      id: Math.round(Math.random() * 100000), // tried using UUID but with SQL primary key datatype it was trublesome
      title: title,
      category: category,
      description: description,
      completed: false,
    };
    try {
      const response = await fetch("http://localhost:9000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      });
      getData()
    } catch (error) {}
  };

  const editData = async ({id, ...todo}) => {

    try {
      const response = await fetch(`http://localhost:9000/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });
      getData()
    } catch (error) {
      console.log("EDIT DATA ERROR", error);
    }
  };

  const deleteData = async (id) =>{

    console.log('hola');
    try {
      await fetch(`http://localhost:9000/todos/${id}`, {
        method: 'DELETE',
      })
      getData()
    } catch (error) {
      
    }
  }

  // Old code, prior to backend
  const deleteItem = (id) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== id);
    });
  };
  // end of old code

  const editItem = (todo) => {

    editData(todo);

  };

  const toggleCheck = (id, completed) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id == id) return { ...todo, completed };
        return todo;
      })
    );
  };

  const filterCategory = (category) => {
    let filteredArr = [];

    todos.map((todo) => {
      if (todo.category == category) {
        console.log("igual");
        filteredArr.unshift(todo);
      } else {
        console.log("no igual");
        filteredArr.push(todo);
      }
    });

    setTodos(filteredArr);
  };

  return (
    <>
      <h1 className="header">Ensolvers Application</h1>

      {/* form component */}

      <NewTodoForm onSubmit={postData} />
      <h2 className="header">TO DO LIST</h2>
      <FilterItems todos={todos} filter={filterCategory} />
      <TodoList
        todos={todos}
        deleteItem={deleteData}
        toggleCheck={toggleCheck}
        editItem={editData}
      />
    </>
  );
}

export default App;
