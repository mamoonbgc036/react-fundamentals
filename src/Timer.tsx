import { useState, useEffect } from 'react'

export default function Timer() {
    const [isRunning, setRunning] = useState<boolean>(false)
    const [second, setSecond] = useState<number>(0)

    const handleRunning = () => {
        const runningState = !isRunning;
        setRunning(runningState)
    }

    const handleReset = () => {
        setRunning(false)
        setSecond(0)
    }
    useEffect(() => {
        if (!isRunning) return;
        const interval = setInterval(() => {
            setSecond(prev => prev + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [isRunning])

    return (
        <>
            <p>{second}</p>
            <button onClick={handleRunning}>{isRunning ? 'stop' : 'start'}</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}