import { TodoItem } from "./todoItem";

export function TodoList ({todos, deleteItem, toggleCheck, editItem} ) {

    return (
        <ul className="list">
          {/* Short circuit && */}
          {todos.length === 0 && 'No Todos'} 
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} deleteItem={deleteItem} toggleCheck={toggleCheck} editItem={editItem}/>
          ))}
        </ul>)
}