
import {  useState } from 'react';

export function Contador() {
    const [contador, setContador] = useState(1);

    function adicionandoContador() {
        setContador(contador + 1);
    }

    return(
        <div>
          <div>{contador}</div>
          <button onClick={adicionandoContador}>Adicionar</button>
        </div>
    )
}
