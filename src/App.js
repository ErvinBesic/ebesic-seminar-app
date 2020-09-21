import React from "react";

import "./App.css";

import ChatForm from "./components/ChatForm";

function App() {
  return (
    <div className="start">
      <div>
        <ChatForm />
      </div>
      <div className="footer">
        <p className="footer--p">
          | 2020 | Algebra - Seminarski rad | &#169; Ervin Bešić{" "}
        </p>
      </div>
    </div>
  );
}

export default App;
