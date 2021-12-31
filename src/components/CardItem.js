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

  // const markerHandler = () => {
  //   setList(
  //     list.map((item) => {
  //       if (item.id === listItem.id) {
  //         return {
  //           ...item,
  //           completed: !listItem.completed,
  //         };
  //       }
  //       return item;
  //     })
  //   );
  // };

  const deleteHandler = () => {
    setItems(items.filter((el) => el.id !== item.id));
    console.log(items);
  };

  // const listItemHandler = () => {
  //   setList(list.filter((el) => el.id !== listItem.id));
  //   console.log(listItem);
  // };

  return (
    <div className={`card-item ba  f3 yellow ${item.completed ? "green" : ""}`}>
      <li className="item-name ">{text}</li>
      <div className="item-btn-box">
        <button onClick={completeHandler} className="item-btn yellow">
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
