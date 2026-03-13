interface CartItems {
    items: string[]
}

export default function ShoppingCart({ items }: CartItems) {
    return (
        <>
            {
                items.map((item: string) => <li>{item}</li>)
            }
        </>
    )
}