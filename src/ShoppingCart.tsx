interface CartItems {
    items: string[]
}
export default function ShoppingCart({ items }: CartItems) {
    return (
        <>
            <p>Cart</p>
            {
                items.map(item => <li>{item}</li>)
            }
        </>
    )
}