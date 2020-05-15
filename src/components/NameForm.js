import React, { useState } from "react";

function NameForm({ onInsert }) {
  const [name, setName] = useState("");
  const onChange = (e) => {
    const { value } = e.target;
    setName((prevName) => value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(name);
    setName((prevName) => "");
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">이름</label>
      <input type="text" value={name} onChange={onChange} id="name" />
      <button type="submit">등록</button>
    </form>
  );
}

export default NameForm;
