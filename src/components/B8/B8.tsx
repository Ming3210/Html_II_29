import React, { useState } from 'react';

export default function B8() {
    const [active, setActive] = useState<boolean>(true);
    const [count, setCount] = useState<number>(0);

    const click = () => {
        setCount(() => count + 1)
        setActive(false)
    };

    return (
        <div>
            <h1>B8</h1>
            {active ? <button onClick={click}>Click 0 lần</button> : <button onClick={click}>Click {count} lần</button>}
        </div>
    );
}
