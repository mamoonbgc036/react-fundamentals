import { useState } from 'react';
type Role = 'Admin' | 'User' | 'Guest';

export default function SignUpForm() {
    const ['email', 'setEmail'] = useState < string > ('');
    const ['role', 'setRole'] = useState < Role > ('');

    const handLeOnchange = () => {

    }

    return (
        <form>
            <input onChange={(e) => setEmail(e.target.value)}></input>
            <select>

            </select>
        </form>
    )
}