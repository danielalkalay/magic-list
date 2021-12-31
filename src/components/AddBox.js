import React from "react";

const AddBox = ({ inputText, setInputText, items, setItems }) => {
  const inputHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitItemHandler = (e) => {
    e.preventDefault();
    setItems([
      ...items,
      { id: Math.random() * 10000, text: inputText, completed: false },
    ]);
    setInputText("");
  };

  return (
    <form className="add-box yellow  shadow-1">
      <input
        value={inputText}
        onChange={inputHandler}
        type="text"
        className="input"
      />
      <li onClick={submitItemHandler} className="add btn yellow ">
        <i className="fas fa-plus"></i>
      </li>
    </form>
  );
};

export default AddBox;
