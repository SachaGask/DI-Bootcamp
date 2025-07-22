import { useState } from 'react';
import Header from './Header';
import Display from './Display';
import Button from './Button';

export default function Holder({ header }) {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header header={header} />
            <Display count={count} />
            <Button count={count} setCount={setCount} />
        </>
    );
}