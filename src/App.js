import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function recieveAdvice() {
    const resp = await fetch("https://api.adviceslip.com/advice");
    const data = await resp.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    recieveAdvice();
  }, []);
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={recieveAdvice}>Get advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      {" "}
      You have recieved <strong>{props.count}</strong> advices
    </p>
  );
}
