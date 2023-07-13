import React from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
function App() {
  return <input type="text" style={{ backgroundColor: "red" }} spellCheck />;
}
root.render(<App />);
