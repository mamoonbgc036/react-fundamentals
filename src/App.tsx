import { useState } from 'react'
import Product from './Product'
import ShoppingCart from './ShoppingCart'

export default function App() {
  const [cart, setCart] = useState<string[]>([])
  const handleAdd = (product: string) => {
    setCart([...cart, product]);
  }
  return (
    <>
      <Product onAdd={handleAdd} />
      <ShoppingCart items={cart} />
    </>
  )
}