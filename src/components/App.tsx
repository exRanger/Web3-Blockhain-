import { useState } from "react";
import './App.scss';

const App = () => {
    const [count, setCount] = useState(0);

    const inc = () => setCount(count + 1)
    return (
        <div className="bgRed">
            l33t
            {count}
        <button onClick={inc}></button>
        </div>
    )
}

export default App; 