function UserCard(prop) {
    return(
        <>
            <p>{prop.name}, {prop.edad}.</p>
        </>
    )
}

export default function App() {
    const usuarios = [
        {id: 1, nombre: "Pepi", edad: 38},
        {id: 2, nombre: "Amparo", edad: 20},
        {id: 3, nombre: "Toni", edad: 25}
    ]

    return (
        <>
            {usuarios.map (usuario => 
                <div key={usuario.id}>
                    <UserCard 
                        name={usuario.nombre}
                        edad={usuario.edad}
                    />
                </div>
            )}
        </>
    )

}