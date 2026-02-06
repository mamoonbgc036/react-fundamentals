import { useState } from 'react'

function LoginState() {
    const [isLogedIn, toggleLogedInState] = useState<boolean>(false)

    return (
        <div>
            {
                !isLogedIn ? <button onClick={() => toggleLogedInState(!isLogedIn)}>Please Login</button> : <button onClick={() => toggleLogedInState(!isLogedIn)}>Loged out</button>
            }
        </div>
    )
}

export default LoginState;