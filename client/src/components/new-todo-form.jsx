import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!(title && category)) return;
    console.log(category);
    onSubmit(title, category, description);

    setDescription("");
    setTitle("");
  };

  const handleSelect= (e) => {
    console.log('run');
    setCategory(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} action="" className="new-item-form">
      <div className="title-category-row">
        <div className="label-input-col">
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

        <div className="label-input-col">
          <label htmlFor="category" className="">
            Category
          </label>
          <select className="input-select" required id="category" name="category" onChange={handleSelect} defaultValue={'category'}>
            <option value="category" disabled hidden>Category</option>
            <option label="Today" value={"Today"}></option>
            <option value={"Tomorrow"}>Tomorrow</option>
            <option label="Week" value={"Week"}></option>
          </select>
        </div>

      </div>

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

      <button type="submit" className="btn">
        ADD
      </button>
    </form>
  );
}
