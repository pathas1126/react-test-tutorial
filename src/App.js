import React, { useState } from "react";
import Counter from "./components/Counter";
import NameForm from "./components/NameForm";
import NameList from "./components/NameList";

function App() {
  const [names, setNames] = useState(["하이맨", "바이맨"]);
  const onInsert = (name) => {
    setNames((prevNames) => prevNames.concat(name));
  };
  return (
    <div>
      <Counter />
      <hr />
      <h1>이름 목록</h1>
      <NameForm onInsert={onInsert} />
      <NameList names={names} />
    </div>
  );
}

export default App;
