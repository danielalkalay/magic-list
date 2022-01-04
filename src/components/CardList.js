import React from "react";
import CardItem from "./CardItem";

const CardList = ({ items, setItems, setTodos, todos }) => {
  return (
    <div className="items-box">
      <ul className="items-list">
        {items.map((item) => (
          <CardItem
            items={items}
            setItems={setItems}
            setTodos={setTodos}
            todos={todos}
            item={item}
            key={item.id}
            text={item.text}
            id={item.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default CardList;
