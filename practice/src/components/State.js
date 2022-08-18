import { useState } from "react";

const State = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>Use State hook</div>
            <div>
                <button onClick={() => setCount(count + 1)}>Increase +</button>
                <button min={0} onClick={() => setCount(count - 1)}>
                    Descrease -
                </button>
                <button onClick={() => setCount(0)}>Reset 0</button>
                <input
                    type="text"
                    min={0}
                    value={count}
                    onChange={() => setCount(count)}
                />
            </div>
        </>
    );
};

export default State;
