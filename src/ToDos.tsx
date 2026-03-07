import { useState } from 'react'

export default function Todos() {
    const [input, setInput] = useState<string>('')
    const [todos, setTodos] = useState<string[]>([])

    const handleDelete = (index: number) => {
        const newTodos = todos.filter((_, i) => index !== i)
        setTodos(newTodos)
    }

    const handleAdd = () => {
        setTodos([...todos, input]);
        setInput("")
    }

    return (
        <>
            <input value={input} onChange={(e) => setInput(e.target.value)}></input>
            <button onClick={handleAdd}>Add</button>
            {
                todos.map((todo, index) => (<><li key={index}>{todo}</li><button onClick={() => handleDelete(index)}>Del</button></>))
            }
        </>
    )
}