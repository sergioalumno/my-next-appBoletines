function Product(prop) {
    return (
        <>
            <p>{prop.name}, {prop.precio}€, {prop.descripcion}.</p>
        </>
    )
}

export default function ProductList() {
    const listaProductos = [
        {id: 1, nombre: "Raton", precio: 50, descripcion: "Raton Logitech"},
        {id: 2, nombre: "Teclado", precio: 105, descripcion: "Teclado Keychron"},
        {id: 3, nombre: "Cascos", precio: 130, descripcion: "Cascos Logitech"}
    ]

    return (
        <>
            {listaProductos.map(producto => 
                <div key={producto.id}>
                    <Product
                        name={producto.nombre} 
                        precio={producto.precio}
                        descripcion={producto.descripcion}
                    />
                </div>
            )}
        </>
    )
}