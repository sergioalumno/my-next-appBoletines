import Greeting from "./Ejercicios/Boletin 1/ejercicio1/ejercicio1.js";
import App from "./Ejercicios/Boletin 1/ejercicio2/ejercicio2";
import Counter from "./Ejercicios/Boletin 1/ejercicio3/ejercicio3";
import ProductList from "./Ejercicios/Boletin 1/ejercicio4/ejercicio4";
import App2 from "./Ejercicios/Boletin 1/ejercicio5/ejercicio5";
import ToDoList from "./Ejercicios/Boletin 1/ejercicio8/ejercicio8";
import StudentList from "./Ejercicios/Boletin 2/ejercicio1/ejercicio1";
import LimitedCounter from "./Ejercicios/Boletin 2/ejercicio2/ejercicio2.js";
import AverageCalculator from "./Ejercicios/Boletin 2/ejercicio3/ejercicio3.js";

export default function Home() {
  return (
    <div>
      <h1>Boletin 2</h1>
      <h1>Ejercicio 3</h1>
        <AverageCalculator />

      <h1>Ejercicio 2</h1>
        <LimitedCounter />

      <h1>Ejercicio 1</h1>
        <StudentList />

      <br/>
      <h1>Boletin 1</h1>

      <h1>Ejercicio 8</h1>
        <ToDoList />

      <h1>Ejercicio 5</h1>
        <App2 />

      <h1>Ejercicio 4</h1>
        <ProductList />

      <h1>Ejercicio 3</h1>
        <Counter />

      <h1>Ejercicio 2</h1>
        <App />

      <h1>Ejercicio 1</h1>
      <Greeting name="Pepi"/>
    </div>
  );
}
