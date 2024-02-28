import React from "react";
import "./stack.css";

export default function Item({ data }: { data?: any }) {
  return (
    <div className="stack-item">
      {data ? data : Math.floor(Math.random() * 100)}
    </div>
  );
}
