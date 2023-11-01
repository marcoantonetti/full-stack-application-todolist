import { useState } from "react";

export function TodoItem({ todo, deleteItem, toggleCheck, editItem }) {
  const { id, title, category, description, completed } = todo;

  const [editClick, setEditClick] = useState(true);
  const [editText, setEditText] = useState(description);
  const [editTitle, setEditTitle] = useState(title);
  const [editCategory, setEditCategory] = useState(category);

  const handleEdit = () => {
    setEditClick(!editClick);
    if (!editClick) {
      editItem({...todo,
        title: editTitle,
        category: editCategory,
        description: editText,
      });
    }
  };

  return (
    <li key={id}>
      <div className="div-newtodo-col">
        <div className="new title-category-row">
          {editClick ? (
            <p className="input-new-text"> {title} </p>
          ) : (
            <input
              value={editTitle}
              type="text"
              name="title"
              className="input-text"
              onChange={(e) => {
                setEditTitle(e.target.value);
              }}
            />
          )}
          {editClick ? (
            <p className="input-new-text"> {category} </p>
          ) : (
            <select
              className="input-select"
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
            className="input-textarea"
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
            onChange={(e) => toggleCheck(id, e.target.checked)}
            className="checkbox"
            name="checkbox"
          />
        </label>
      </div>
    </li>
  );
}
