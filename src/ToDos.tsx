import { useState } from 'react'

export default function Todos() {
    const [todos, setTodo] = useState<string[]>([]);
    const [input, setInput] = useState<string>('');

    const handleAdd = () => {
        setTodo([...todos, input]);
        setInput('')
    }

    const handleDelete = (index: number) => {
        const newTodos = todos.filter((_, i) => i !== index)
        setTodo(newTodos)
    }

    return (
        <>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {
                    todos.map((item, index) => (<><li key={index}>{item}</li><button onClick={() => handleDelete(index)}>Del</button></>))
                }
            </ul>

        </>
    )
}