import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";


function App() {

    let [count, setCount] = useState<number>(0)

    const countValue = () => {
        setCount(count + 1)
    }

    const ResetValue = () => {
        setCount(0)
    }

    return (
        <div className="App">
            <Counter
                count={count}
                countValue={countValue}
                ResetValue={ResetValue}
            />
        </div>
    );
}

export default App;
