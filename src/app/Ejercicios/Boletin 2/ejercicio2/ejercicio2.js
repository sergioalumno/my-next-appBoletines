"use client"

import { useState } from "react"

export default function LimitedCounter() {
    const [valorMaximo, setValorMaximo] = useState(0)
    const [contador, setContador] = useState(0)

    function sumarContador() {
        if (contador<valorMaximo) {
            setContador(contador+1)
        }
    }

    return (
        <>
            Numero máximo actual: {valorMaximo}
            <br/>
            Numero máximo: <input type="number" onChange={(e) => setValorMaximo(e.target.value)} />
            <button onClick={()=> setContador(0)}>Reiniciar contador</button>
            <br/>
            Contador: {contador} <br/>
            <button onClick={sumarContador}>+1</button>
        </>
    )
}