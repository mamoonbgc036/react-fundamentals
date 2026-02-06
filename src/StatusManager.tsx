import { useState } from 'react'

type Logs = {
    name: string
}
function StatusManager() {
    const [logs, setLogs] = useState<Logs[]>([])
    const [state, setState] = useState<boolean>(true)

    const handleToggle = () => {
        const log = {
            name: `Log ${state} at ${new Date().toLocaleTimeString()}`
        }
        setState(prev => !prev)
        setLogs(prevsLog => [...prevsLog, log])
    }

    return (
        <>
            <p>{state ? 'open' : 'close'}</p>
            <button onClick={handleToggle}>Toggle</button>
            <ul>
                {
                    logs.map(log => <li>{log.name}</li>)
                }
            </ul>
        </>
    )
}

export default StatusManager;