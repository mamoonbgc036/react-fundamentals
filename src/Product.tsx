type ProductProps = {
    onAdd: (product: string) => void
}
export default function Product({ onAdd }: ProductProps) {
    const products = [
        { name: "Laptop", price: 1000 },
        { name: "Phone", price: 600 },
        { name: "Headphones", price: 200 }
    ];
    return (
        <>
            {
                products.map(product => <li>{product.name} - {product.price} <button onClick={() => onAdd(product.name)}>add</button></li>)
            }
        </>
    )
}