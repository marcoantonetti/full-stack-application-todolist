import { useState } from "react";
import { TodoItem } from "./todoItem";
import FilterItems from "./filterItems";

export function TodoList ({todos, deleteItem, toggleCheck, editItem} ) {

    return (
        <ul className="list">
            
          {/* Short circuit && */}
          {todos.length === 0 && 'No Todos'} 
          {todos.map((todo) => (
            <TodoItem todo={todo} deleteItem={deleteItem} toggleCheck={toggleCheck} editItem={editItem}/>
          ))}
        </ul>)
}