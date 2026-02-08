import React, { useState } from 'react';
type Role = 'Admin' | 'User' | 'Guest';

export default function SignUpForm() {
    const [email, setEmail] = useState<string>("")
    const [role, setRole] = useState<Role>("User");

    const handLeOnchange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRole(e.target.value as Role);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Email: ${email}\nRole: ${role}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}></input>
            <select onChange={handLeOnchange}>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
                <option value="Guest">Guest</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    )
}