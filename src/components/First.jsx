import React from "react";
import "./First.css";

const First = () => {
  const title = "First component";
  const flag = true;

  return (
    <>
      <h1 className="title">{title}</h1>
      <p style={{ color: "orange", fontSize: "1.5em" }}>
        Lorem, ipsum. {new Date().getDate()}
      </p>

      {flag ? <h2>Heading 2</h2> : ""}

      {flag && <h2>Heading 2</h2>}
    </>
  );
};

export default First;
