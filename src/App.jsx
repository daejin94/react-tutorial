import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const countReference = useRef(0);

  console.log("- rerendered");
  return (
    <>
      {/* 1. 표기 View */}
      <div>State 값 : {count}</div>
      <div>Reference 값 : {countReference.current}</div>
      {/* 2. 조작 Controller */}
      <button onClick={() => setCount(count + 1)}>State 값 증가 </button>
      <button onClick={() => (countReference.current += 1)}>
        Reference 값 증가{" "}
      </button>
      <button
        onClick={() => console.log(`지금 값은 : ${countReference.current}`)}
      >
        {" "}
        표기{" "}
      </button>
    </>
  );
}

export default App;
