import { useState } from 'react';

function LikeCard() {
    const [like, setLike] = useState<number>(0);

    return (
        <div>
            <button onClick={() => setLike(prv => prv + 1)}>Like {like}</button>
            <button onClick={() => setLike(0)}>back</button>
        </div>
    )
}

export default LikeCard;