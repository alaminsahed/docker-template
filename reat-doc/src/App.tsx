import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>hello docker. We are learning...</p>
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
    </>
  );
}

export default App;
