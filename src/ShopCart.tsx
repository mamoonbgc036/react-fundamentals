import { useReducer } from 'react'

export default function ShopCart() {
    const products = [
        { id: 1, name: "mobile", price: 50000, quantity: 250 },
        { id: 2, name: "TV", price: 20000, quantity: 200 },
        { id: 3, name: "drone", price: 25000, quantity: 200 }
    ]

    return (
        <>
            <p>Cart <span>1</span></p>
            {
                products.map(product => <li>{product.name}-{product.price}-{product.quantity} <button>Add</button></li>)
            }
        </>
    )
}