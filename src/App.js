import React, { useState, useEffect } from "react";

import Header from "./Components/Header";
import { soma } from "./utils/soma";

import { NovaDiv } from "./AppStyles";

function App() {
  const [abc, setAbc] = useState(0);
  const [abcd, setAbcd] = useState(0);
  const [motrar, setMostrar] = useState(false);

  useEffect(() => {
    setAbc(123456789);
  }, []);

  useEffect(() => {
    console.log(abc);
  }, [abc]);

  useEffect(() => {
    console.log(abcd);
  }, [abcd]);

  return (
    <>
      {motrar && <Header />}
      {abc}
      <NovaDiv>
        <button onClick={() => setMostrar(!motrar)}>Clicck</button>
        <p>Paragrafo</p>
        <p>Paragrafo Paragrafo Paragrafo Paragrafo Paragrafo</p>
      </NovaDiv>
    </>
  );
}

export default App;
