import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => setInput((prev) => prev + value);
  const handleClear = () => setInput("");
  const handleDelete = () => setInput((prev) => prev.slice(0, -1));

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      alert("Invalid Expression");
    }
  };

  const buttons = [
    "7", "8", "9", "/", 
    "4", "5", "6", "*", 
    "1", "2", "3", "-", 
    "0", ".", "=", "+"
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>ReactJS Calculator</h2>
      <div
        style={{
          display: "inline-block",
          border: "2px solid #333",
          padding: "15px",
          borderRadius: "10px",
        }}
      >
        <input
          type="text"
          value={input}
          readOnly
          style={{
            width: "230px",
            height: "40px",
            marginBottom: "10px",
            fontSize: "18px",
            textAlign: "right",
          }}
        />
        <br />
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => (btn === "=" ? calculate() : handleClick(btn))}
            style={{
              width: "50px",
              height: "50px",
              margin: "5px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            {btn}
          </button>
        ))}
        <br />
        <button
          onClick={handleClear}
          style={{ width: "110px", height: "40px", margin: "5px" }}
        >
          Clear
        </button>
        <button
          onClick={handleDelete}
          style={{ width: "110px", height: "40px", margin: "5px" }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default App;

