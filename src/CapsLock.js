
export function CapsLock (props){
    const textoInserido = props.texto;
    const textoEmCapsLock = textoInserido.toUpperCase();
    return <>
    {textoEmCapsLock}
    </>
};