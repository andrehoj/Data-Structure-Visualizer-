import React from "react";
import Item from "./Item";

export default function StackContainer() {
  const [items, setItems] = React.useState([45, 57, 343]);
  function popItem() {
    const itemsCopy = [...items];

    itemsCopy.shift();

    setItems(itemsCopy);
  }
  function pushItem() {
    const itemsCopy = [...items];

    itemsCopy.unshift(Math.floor(Math.random() * 100));

    setItems(itemsCopy);
  }
  return (
    <div>
      <h1>Da Stack Container</h1>
      <h1>Stack size: {items.length}</h1>
      <h1>Is Empty?: {items.length ? "false" : "true"}</h1>
      <button className="btn" onClick={pushItem}>Push Item</button>
      <button className="btn" onClick={popItem}>Pop Item</button>

      <div>
        {items.map((item) => (
          <Item data={item} />
        ))}
      </div>
    </div>
  );
}
