type CartProps = {
    items: string[]
}

export default function Cart({ items }: CartProps) {
    return (
        <>
            <h3>Carts</h3>
            {
                items.map((item, index) => <div key={index}>{item}</div>)
            }
        </>
    )
}