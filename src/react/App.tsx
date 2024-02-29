import React from "react";
import StackContainer from "./stack/StackContainer";
import QueueContainer from "./queue/QueueContainer";
import DictionaryContainer from "./dictionary/DictionaryContainer";
function App() {
  return (
    <>
      <StackContainer />
      <QueueContainer />
      <div style={{ marginTop: "50px" }}>
        <DictionaryContainer />
      </div>
    </>
  );
}

export default App;
