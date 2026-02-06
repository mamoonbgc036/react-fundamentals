import { useState } from 'react'
import Parent from './Parent';

function Child() {
    const [count, setCount] = useState<number>(0)
    return (
        <>
            <Parent count={count} />
            <button onClick={() => setCount(count + 1)} >Increase</button>
        </>
    )
}

export default Child;