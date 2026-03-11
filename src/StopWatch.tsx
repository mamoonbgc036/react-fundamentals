import { useRef, useState } from "react";

export default function StopWatch() {
    const [seconds, setSeconds] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);

    // interval ref (for setInterval id)
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // DOM ref (hidden input)
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleStart = () => {
        if (isRunning) return;

        intervalRef.current = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        setIsRunning(true);

        // focus hidden input
        inputRef.current?.focus();
    };

    const handleStop = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        setIsRunning(false);
    };

    const handleReset = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        setSeconds(0);
        setIsRunning(false);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>{seconds} seconds</h1>

            <button onClick={handleStart} disabled={isRunning}>
                Start
            </button>

            <button onClick={handleStop} disabled={!isRunning}>
                Stop
            </button>

            <button onClick={handleReset}>
                Reset
            </button>

            {/* hidden input just to practice DOM ref */}
            <input
                ref={inputRef}
                style={{ opacity: 0, position: "absolute" }}
                tabIndex={-1}
            />
        </div>
    );
}
