import React from "react";

function Pizza({ pizza, setPizzaTopping, setPizzaSize, setVegetarian, setPizzaId }) {
  const {topping, size, vegetarian, id} = pizza

  function haneleEditClick(){
    setPizzaTopping(topping);
    setPizzaSize(size);
    setVegetarian(vegetarian)
    setPizzaId(id)
  }

  
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td className="vegetarian">{vegetarian ? "✅" : "❌"}</td>
      <td>
        <button onClick={haneleEditClick}type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
