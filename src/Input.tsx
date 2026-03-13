import { useState } from 'react'

export default function Input() {
    const [name, setName] = useState<string>('')
    const handleSubmit = () => {
        setName(name)
    }
    return (
        <>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            ></input>
            <button onClick={handleSubmit}>Submit</button>
            <p>{name}</p>
        </>
    )
}