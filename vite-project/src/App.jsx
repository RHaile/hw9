import React, { useState } from "react";
import Nav from "./components/Nav";
import TipForm from "./components/TipForm";
import TipList from "./components/TipList";
import TipSummary from "./components/TipSummary";

function App() {
  // pass prop through child components
  const [tips, setTips] = useState([]);

  const addTip = (newTip) => {
    setTips([...tips, newTip]);
  };

  return (
    <>
      <Nav />
      <main>
        <TipForm addTip={addTip} />
        <TipSummary tips={tips} />
        <TipList tips={tips} />
      </main>
    </>
  );
}

export default App;
