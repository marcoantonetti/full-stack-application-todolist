import React from "react";

//Filter category component
export default function FilterByCategory({filter}) {

  return (
    <select
      required
      id="category"
      name="category"
      onChange={(e)=>filter(e.target.value)}
      defaultValue={"category"}
      className="smaller"
    >
      <option value="category" disabled hidden>
        Category
      </option>
      <option label="Today" value={"Today"}></option>
      <option value={"Tomorrow"}>Tomorrow</option>
      <option label="Week" value={"Week"}></option>
    </select>
  );
}
