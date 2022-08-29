import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Product({ name, price }) {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  return (
    <div className="card">
      <h2>{name}</h2>
      <div className="card__priceContainer">
        <span>
          <button
            onClick={() => (amount > 0 ? setAmount(amount - 1) : undefined)}
          >
            -
          </button>
          <span className="card__price">{amount}</span>
          <button onClick={() => setAmount(amount + 1)}>+</button>
        </span>
        <span>{price}</span>
      </div>
      <button
        className="button__addToCart"
        onClick={() => {
          dispatch({ type: "ADD_PRODUCT", payload: { name, amount, price } });
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}
