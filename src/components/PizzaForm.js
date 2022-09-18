import React from "react";

function PizzaForm({
  pizzaTopping,
  setPizzaTopping,
  pizzaSize,
  setPizzaSize,
  vegetarian,
  setVegetarian,
  pizzaId,
  handleUpdatePizza
}) {
  ///these are what set our info
  function vegetarianChange(){
    setVegetarian(!vegetarian)
  }
  function pizzaToppingChange(e){
    setPizzaTopping(e.target.value)
  }
  function pizzaSizeChange(e){
    setPizzaSize(e.target.value)
  }

  ///this handles updating our pizza object on front and back end
  function handleSubmit(e){
    e.preventDefault()
    const newPizza = {
      topping: pizzaTopping,
      size: pizzaSize,
      vegetarian: vegetarian
    }
  fetch(`http://localhost:3001/pizzas/${pizzaId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPizza)
  })
  .then((r) => r.json())
  .then((updatedPizza) => handleUpdatePizza(updatedPizza))
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={pizzaTopping}
            onChange={pizzaToppingChange}
          />
        </div>
        <div className="col">
          <select value={pizzaSize} onChange={pizzaSizeChange} className="form-control" name="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian}
              onChange={vegetarianChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not  Vegetarian"
              checked={!vegetarian}
              onChange={vegetarianChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
