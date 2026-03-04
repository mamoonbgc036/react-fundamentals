import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState<number>(0)
    return (
        <>
            <button onClick={() => setCount(count + 1)}>Incremeant</button>
            <p>{count}</p>
            <button onClick={() => setCount(count - 1)}>Decreament</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    )
}