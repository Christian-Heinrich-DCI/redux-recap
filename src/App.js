import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import "./App.css";

// productData would usually come from the backend,
// but for this example it's just an array with fixed data
const productData = [
  {
    name: "Toothpaste",
    price: 1.99,
  },
  {
    name: "Rubber Boots",
    price: 29.99,
  },
  {
    name: "Umbrella",
    price: 9.99,
  },
];

function App() {
  const cart = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>React Shop</h1>
      {/* Products are displayed as separate components to
      have a work enviroment for a Redux store */}
      <main className="products__container">
        {productData.map((product, index) => (
          <Product key={index} name={product.name} price={product.price} />
        ))}
      </main>

      <h1>Redux Shopping Cart</h1>
      {cart.map((cartItem, index) => (
        <div key={index}>
          {JSON.stringify(cartItem)}
          <button
            onClick={() => {
              dispatch({ type: "REMOVE_PRODUCT", payload: { index } });
            }}
          >
            Remove From Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
