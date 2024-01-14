import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// import React, { useState } from 'react';

// const ButtonGroup = () => {
//   const [buttons, setButtons] = useState([]);

//   const handleAddButton = () => {
//     const newButton = <button key={buttons.length + 1}>{buttons.length + 1}</button>;
//     setButtons([...buttons, newButton]);
//   };

//   const handleRemoveButton = () => {
//     const updatedButtons = [...buttons];
//     updatedButtons.pop();
//     setButtons(updatedButtons);
//   };

//   return (
//     <div>
//       <button onClick={handleAddButton}>Thêm</button>
//       <button onClick={handleRemoveButton} disabled={buttons.length === 0}>Xóa</button>
//       {buttons}
//     </div>
//   );
// };

//export default ButtonGroup;
