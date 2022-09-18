import React from "react";

function Pizza({ pizza, setPizzaTopping, setPizzaSize, setVegetarian }) {
  const {topping, size, vegetarian} = pizza

  function haneleEditClick(){
    setPizzaTopping(topping);
    setPizzaSize(size);
    setVegetarian(vegetarian)
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
