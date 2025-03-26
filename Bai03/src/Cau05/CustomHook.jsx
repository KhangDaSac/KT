import { useState } from 'react';

export const useCounter = (initValue = 0) => {
    const [count, setCount] = useState(initValue);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }
    return [count, increment, decrement, reset];
}


