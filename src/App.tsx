import { useState, useRef, useEffect } from 'react'

export default function App() {
  const [count, setCount] = useState<number>(0);
  const renderCount = useRef<number>(0);

  useEffect(() => {
    renderCount.current += 1; // update ref — no re-render triggered!
  });

  return (
    <>
      <p>Count: {count}</p>
      <p>Component rendered {renderCount.current} times</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
}