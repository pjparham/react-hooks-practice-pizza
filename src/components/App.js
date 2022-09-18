import React, { useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [pizzaTopping, setPizzaTopping] = useState("")
  const [pizzaSize, setPizzaSize] = useState("Small")
  const [vegetarian, setVegetarian] = useState(true)

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
      />
      <PizzaList 
        pizzas={pizzas} 
        setPizzas={setPizzas} 
        setPizzaTopping={setPizzaTopping}
        setPizzaSize={setPizzaSize}
        setVegetarian={setVegetarian}
      />
    </>
  );
}

export default App;
