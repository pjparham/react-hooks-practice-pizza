import React, { useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [pizzaTopping, setPizzaTopping] = useState("")
  const [pizzaSize, setPizzaSize] = useState("Small")
  const [vegetarian, setVegetarian] = useState(true)
  const [pizzaId, setPizzaId] = useState("")

  function handleUpdatePizza(updatedPizza){
    const updatedPizzas = pizzas.map((pizza) => {
      if (pizza.id === updatedPizza.id) {
        return updatedPizza
      } else {return pizza}
    });
    setPizzas(updatedPizzas)
  }

  return (
    <>
      <Header />
      <PizzaForm 
        pizzaTopping={pizzaTopping}
        setPizzaTopping={setPizzaTopping}
        pizzaSize={pizzaSize}
        setPizzaSize={setPizzaSize}
        vegetarian={vegetarian}
        setVegetarian={setVegetarian}
        pizzaId={pizzaId}
        handleUpdatePizza={handleUpdatePizza}
      />
      <PizzaList 
        pizzas={pizzas} 
        setPizzas={setPizzas} 
        setPizzaTopping={setPizzaTopping}
        setPizzaSize={setPizzaSize}
        setVegetarian={setVegetarian}
        setPizzaId={setPizzaId}
      />
    </>
  );
}

export default App;
