"use client"

function Card(titulo) {
  return (
    <>
      <h2>{titulo.title}</h2>
      <p>{titulo.descrip}</p>
      <img src={titulo.src}></img>
    </>
  );
}

export default function App() {
    return(
        <>
            <Card title="Seat Toledo IV" descrip="Este es un Seat Toledo IV de 2016" src="https://imagenes.autobild.es/files/image_640_360/uploads/imagenes/2023/10/03/68ca7f3b03b27.jpeg"/>
            <Card title="Seat Toledo IV" descrip="Este es un Seat Toledo IV de 2016" src="https://imagenes.autobild.es/files/image_640_360/uploads/imagenes/2023/10/03/68ca7f3b03b27.jpeg"/>
        </>
    )
}

