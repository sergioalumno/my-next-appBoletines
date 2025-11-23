"use client"

import { useState } from "react"

let id = 2
const ListaEstudiantes = [{id: 1, nombre: "pepi", nota: 8}]
export default function StudentList() {
    const [EstudiantesAct, setEstudianteAct] = useState(ListaEstudiantes)
    const [estudianteNombre, setEstudianteNombre] = useState("")
    const [estudianteNota, setEstudianteNota] = useState(0)

    function Agregar() {
        const NuevosEstudiantes = [ 
            ...EstudiantesAct,
            
            {id: id++,
            nombre: estudianteNombre,
            nota: estudianteNota} 
            ]

        setEstudianteAct(NuevosEstudiantes)
    }

    function Eliminar(id) {
        const NuevosEstudiantes = EstudiantesAct.filter(estudiante => estudiante.id!=id)

        setEstudianteAct(NuevosEstudiantes)
    }

    return (
        <>
            Nombre: <input type="text" onChange={(e) => setEstudianteNombre(e.target.value)}/>
            Nota: <input type="text" onChange={(e) => setEstudianteNota(e.target.value)}/> 
            <button onClick={Agregar}>Agregar</button>

            {EstudiantesAct.map(estudiante => 
                <div key={estudiante.id}>
                    <p>Nombre: {estudiante.nombre}, Nota: {estudiante.nota}.</p>
                    <button onClick={(e) => Eliminar(estudiante.id)}>Eliminar</button>
                </div>
            )}
        </>
    )

}