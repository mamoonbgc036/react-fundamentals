import React, { useState } from 'react';

function GreetingCard() {
    const [name, setName] = useState<string>('')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    return (
        <div>
            <p>Hello, {name}</p>
            <input
                onChange={handleChange}
                value={name}
            />
        </div>
    )
}

export default GreetingCard;