import { useState } from 'react';

export default function CountNumber() {
    const [count, setCount] = useState<number>(0)

    const handleIncrease = () => {
        setCount(count + 1)
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={handleIncrease}>Increase</button>
        </>
    )
}