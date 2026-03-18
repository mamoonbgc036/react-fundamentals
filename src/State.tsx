import { useState } from 'react'

export default function State() {
    const [count, setCount] = useState<number>(0)

    const handleClick = (pointer: string) => {
        switch (pointer) {
            case "increase":
                setCount(count + 1)
                break
            case "decrease":
                setCount(count - 1)
                break
            case "reset":
                setCount(0)
                break
            case "increaseBy":
                setCount(count + 5)
        }
    }
    return (
        <>
            <p>{count}</p>
            <button onClick={() => handleClick('increase')}>Incre</button>
            <button onClick={() => handleClick('decrease')}>Decr</button>
            <button onClick={() => handleClick("reset")}>Reset</button>
            <button onClick={() => handleClick('increaseBy')}>Incr by 5</button>
        </>
    )
}