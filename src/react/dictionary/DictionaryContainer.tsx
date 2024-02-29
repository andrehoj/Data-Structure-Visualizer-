import React from "react";
import "./dictionary.css";
import "./arrow.css";

const map = new Map();

export default function DictionaryContainer() {
  const [items, setItems] = React.useState(map);

  return (
    <div className="dictionary-container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 0,
          alignContent: "center",
          flexDirection: "column",
        }}
      >
        <h2 className="keys-title">Keys</h2>
        <div className="table-container">
          <div className="table-item">
            <p>"Key"</p>
            <div className="mainarrow-container">
              <div className="arrow-dot"></div>
              <div className="arrow-line"></div>
              <div className="arrowhead-container">
                <div className="arrow"></div>
              </div>
            </div>
          </div>
          <div className="table-item">
            <p>"Key two"</p>
            <div className="mainarrow-container">
              <div className="arrow-dot"></div>
              <div className="arrow-line"></div>
              <div className="arrowhead-container">
                <div className="arrow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 0,
          alignContent: "center",
          flexDirection: "column",
        }}
      >
        <h2 className="keys-title">Values</h2>
        <div className="table-container">
          <div className="table-item">
            <p>Value one</p>
          </div>
          <div className="table-item">
            <p>value two</p>
          </div>
        </div>
      </div>
    </div>
  );
}
