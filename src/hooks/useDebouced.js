import { useState, useEffect } from 'react';

const useDebouced = (value, delay) => {
    const [deboucedValue, setDeboucedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDeboucedValue(value), delay);

        return () => clearTimeout(handler);
    });

    return deboucedValue;
};

export default useDebouced;
