import React from "react";
import Item from "./Item";
import "./queue.css";

export default function QueueContainer() {
  const [items, setItems] = React.useState([45, 57, 343]);
  function inqueueItem() {
    const itemsCopy = [...items];

    itemsCopy.unshift(Math.floor(Math.random() * 100));

    setItems(itemsCopy);
  }
  function dequeueItem() {
    const itemsCopy = [...items];

    itemsCopy.pop();

    setItems(itemsCopy);
  }
  return (
    <div>
      <h1>Da Queue Container</h1>
      <h1>queue size: {items.length}</h1>
      <h1>Is Empty?: {items.length ? "false" : "true"}</h1>
      <button className="btn" onClick={inqueueItem}>Inqueue Item</button>
      <button className="btn" onClick={dequeueItem}>Dequeue Item</button>

      <div className="queue-container">
        {items.map((item) => (
          <Item data={item} />
        ))}
      </div>
    </div>
  );
}
