import { useState } from "react";

export function TodoItem({ todo, deleteItem, editItem }) {
  // Destructuring
  const { id, title, category, description, completed } = todo;

  // Hooks
  // When edit button is clicked, title p tag, category p tag and description textarea tag are re-render to input tags. Where the user can edit them
  // When the user clicks the edit button again, the input values are store in the editText, editTitle and editCategory variables and the
  // editItem function is call with the edited todo 
  const [editClick, setEditClick] = useState(true);
  
  const [editText, setEditText] = useState(description);
  const [editTitle, setEditTitle] = useState(title);
  const [editCategory, setEditCategory] = useState(category);

  // Functions
  // This function triggers the change of state of editClick and calls editItem to edit the item
  const handleEdit = () => {
  
    setEditClick(!editClick);
  
    // This conditional is because we only want to edit the todo when the edit button is clicked again
    if (!editClick) {
      editItem({...todo,
        title: editTitle,
        category: editCategory,
        description: editText,
      });
    }
  };

  return (
    <li>
      <div className="div-newtodo-col">
        <div className="new title-category-row">
          {editClick ? (
            <p className="input-new-text"> {title} </p>
          ) : (
            <input
              value={editTitle}
              type="text"
              name="title"
              className="new input-text"
              onChange={(e) => {
                setEditTitle(e.target.value);
              }}
            />
          )}
          {editClick ? (
            <p className="new input-new-text"> {category} </p>
          ) : (
            <select
              className="new input-select"
              required
              id="category"
              name="category"
              onChange={(e) => setEditCategory(e.target.value)}
              defaultValue={category}
            >
              <option value="category" disabled hidden>
                Category
              </option>
              <option label="Today" value={"Today"}></option>
              <option value={"Tomorrow"}>Tomorrow</option>
              <option label="Week" value={"Week"}></option>
            </select>
          )}
          {/* component */}
        </div>
        {editClick ? (
          <p className="input-new-text newtodo-description"> {description} </p>
        ) : (
          <textarea
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            type="textarea"
            id="description"
            placeholder="Description"
            className="new input-textarea"
          ></textarea>
        )}
      </div>

      <div className="btn-flex-col">
        <button className="btn btn-danger" onClick={() => deleteItem(id)}>
          Delete
        </button>
        <button className="btn btn-green" onClick={() => handleEdit()}>
          Edit
        </button>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => editItem({...todo, completed: e.target.checked})}
            className="checkbox"
            name="checkbox"
          />
        </label>
      </div>
    </li>
  );
}
