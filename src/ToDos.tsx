import { useState } from 'react'

export default function Todos() {
    const [todos, setTodo] = useState<[]>([]);
    const [input, setInput] = useState<string>('');

    const handleAdd = (input) => {

    }

    return (
        <>
            <input onChange={(input) => handleAdd(input)} />
            <ul>
                {
                    todos.map((item, index) => (<li key={index}>{item}</li>))
                }
            </ul>

        </>
    )
}