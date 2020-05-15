import React from "react";

function NameList({ names }) {
  return (
    <ul>
      {names.map((name, i) => (
        <li key={i}>{name}</li>
      ))}
    </ul>
  );
}

export default NameList;
