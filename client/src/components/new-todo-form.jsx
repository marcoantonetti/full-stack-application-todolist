import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  // Hooks
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  // Functions
  const handleSelect = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Title and category must have a value
    if (!(title && category)) return;
    
    onSubmit(title, category, description);
    setDescription("");
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} action="" className="new-item-form">
      <div className="title-category-row">
        <div className="label-input-col">
          {/* title */}
          <label htmlFor="title" className="">
            Title
          </label>
          <input
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            id="title"
            placeholder="Title"
            className="input-text"
          />
        </div>
        {/* End of title */}
        {/* category */}
        <div className="label-input-col">
          <label htmlFor="category" className="">
            Category
          </label>
          <select
            className="input-select"
            required
            id="category"
            name="category"
            onChange={handleSelect}
            defaultValue={"category"}
          >
            <option value="category" disabled hidden>
              Category
            </option>
            <option label="Today" value={"Today"}></option>
            <option value={"Tomorrow"}>Tomorrow</option>
            <option label="Week" value={"Week"}></option>
          </select>
        </div>
        {/* End of category */}
      </div>
      {/* description */}
      <label htmlFor="description" className="">
        Description
      </label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="textarea"
        id="description"
        placeholder="Description"
        className="input-textarea"
      ></textarea>
      {/* End of description */}
      {/* ADD BUTTON */}
      <button type="submit" className="btn">
        ADD
      </button>
    </form>
  );
}
