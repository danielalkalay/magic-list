import React from "react";

const CardItem = ({ text, item, setItems, items, id }) => {
  //js functions
  const completeHandler = () => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const deleteHandler = () => {
    setItems(items.filter((el) => el.id !== item.id));
    console.log(items);
  };

  return (
    <div
      className={`card-item   f3 yellow ${item.completed ? "completed" : ""}`}
    >
      <li className="item-name ">{text}</li>
      <div className="item-btn-box">
        <button
          onClick={completeHandler}
          className={`item-btn  ${item.completed ? "completed" : ""}`}
        >
          <i className="far fa-check-circle"></i>
        </button>
        <button onClick={deleteHandler} className="item-btn yellow">
          <i className="far fa-times-circle"></i>
        </button>
      </div>
    </div>
  );
};

export default CardItem;
