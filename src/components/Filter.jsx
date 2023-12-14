import React from "react";

function Filter({ setInputValue }) {
  const handleFilter = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
  };
  return (
    <input onChange={handleFilter} type="text" placeholder="Filter by name" />
  );
}
export default Filter;
