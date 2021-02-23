import { useState} from 'react';

interface ButtonProps //poderia ser utilizado type tbm, caracterítica do typescript
{
    color:string;
    children: string;

}

export function Button(props: ButtonProps) {
    const [counter, setCounter] = useState(1)

    function increment() {
        setCounter(counter + 1) //counter++; não funciona aqui, por conta do princípio da imutabilidade no React
    }

    return (
        <button type="button" style={{ backgroundColor: props.color}} onClick={increment}>
            {props.children} <strong>{counter}</strong>
        </button>

    );

}