import React from "react";
import CardItem from "./CardItem";

const CardList = ({ items, setItems }) => {
  return (
    <div className="items-box">
      <ul className="items-list">
        {items.map((item) => (
          <CardItem
            items={items}
            setItems={setItems}
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
