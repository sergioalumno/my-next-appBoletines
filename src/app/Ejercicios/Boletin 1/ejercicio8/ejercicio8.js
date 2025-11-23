"use client"

import { useState } from "react"

let id=1
const tareas = [{id: 0, nombre: "Comprar pan", completada: false}]
export default function ToDoList() {
    let nombre=""
    let completada=false
    const [tareasnuevas, setTareasNuevas] = useState(tareas)
    const [tarea, setTarea] = useState("")

    function agregar() {
        const listatareas = [
            ...tareasnuevas, {
                id: id++,
                nombre: tarea,
                completada: false
            }
        ]

        setTareasNuevas(listatareas)
    }

    function eliminartarea(id) {
        
        const lista = tareasnuevas.filter(tarea => tarea.id != id)
        
        setTareasNuevas(lista)
    }

    function marcarCompletado(id) {

        const lista = tareasnuevas.map(tarea => {
            if (tarea.id==id) {
                const nuevatarea={
                    ...tarea,
                    completada: !tarea.completada};
                    return nuevatarea

            } else {
                return tarea
            }

        })

        setTareasNuevas(lista)
    }

    return (
        <>
            <input type="text" onChange={(e) => setTarea(e.target.value)}/>
            <button onClick={agregar}>Agregar</button>

            {tareasnuevas.map(tareaobj =>
                <div key={tareaobj.id}>
                    <p>{tareaobj.nombre}, Completado:{tareaobj.completada ? "✅":"❌"}</p> 
                    <button onClick={() => eliminartarea(tareaobj.id)}>Eliminar</button>
                    <button onClick={() => marcarCompletado(tareaobj.id)}>Marcar completada</button>
                </div>
            )}
        </>
    )
    

}