import { useState } from 'react'

type User = {
    userName: "",
    age: 0
}

export default function FormInput() {
    const [isSubmit, setSubmit] = useState<boolean>(false);
    const [user, setUser] = useState<User>({
        userName: "",
        age: 0
    })
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmit(true);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="userName" onChange={handleChange} />
                <input type="text" name="age" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            {isSubmit && (
                <p>{user.userName} - {user.age}</p>
            )}
        </>
    )
}

