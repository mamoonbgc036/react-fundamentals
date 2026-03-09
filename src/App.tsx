import { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

export default function App() {
  const [cart, setCart] = useState<string[]>([]);

  const handleAdd = (productName: string) => {
    setCart([...cart, productName]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      <ProductList onAdd={handleAdd} />

      <Cart items={cart} />
    </div>
  );
}