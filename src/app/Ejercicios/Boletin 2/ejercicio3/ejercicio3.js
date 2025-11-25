"use client"

import { useState } from "react"

const ListaNotas = [{id: null, nota: null}]
let id=1
let countnum=0
export default function AverageCalculator() {
    const [NotasAct,setNotasAct] = useState(ListaNotas)
    const [notaUser, setNotaUser] = useState(0)
    const [promedio, setPromedio] = useState(0)

    function agregar(e) {
        e.preventDefault();

        const notasNuevas = [
            ...NotasAct,

            {
                id: id++,
                nota: notaUser
            }
        ]
        countnum=countnum+1
        setNotasAct(notasNuevas)
        calcularPromedio(notasNuevas)
    }
    
    function calcularPromedio(notasNuevas) {
        let calcpromedio = 0
        for (let i=0; i<notasNuevas.length; i++) {
            calcpromedio = calcpromedio + notasNuevas[i].nota
        }
        setPromedio(calcpromedio/countnum)
    }

    return(
        <>
            <input type="number" onChange={(e) => setNotaUser(Number(e.target.value))} />
            <button onClick={agregar}>Agregar</button>

            {NotasAct.map(nota => 
                <div key={nota.id}>
                    <p>{nota.id} {nota.nota}</p>
                </div>
            )}

            <p>Promedio: {promedio}</p>
        </>
    )
}