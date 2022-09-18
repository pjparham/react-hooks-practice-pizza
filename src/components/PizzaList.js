import React, { useEffect } from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas, setPizzas, setPizzaTopping, setPizzaSize, setVegetarian } ) {
  useEffect(() => {
    fetch(`http://localhost:3001/pizzas`)
    .then((r) => r.json())
    .then((pizzaData) => setPizzas(pizzaData))
  }, []);

  const renderPizzas = pizzas.map((pizza) => {
    return <Pizza 
              key={pizza.id} 
              pizza={pizza}
              setPizzaTopping={setPizzaTopping}
              setPizzaSize={setPizzaSize}
              setVegetarian={setVegetarian}
            />
  })

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
         renderPizzas
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
