type ProductListProps = {
    onAdd: (productName: string) => void
}

export default function ProductList({ onAdd }: ProductListProps) {
    const products = [
        { name: "Laptop", price: 1000 },
        { name: "Phone", price: 600 },
        { name: "Headphones", price: 200 }
    ];

    return (
        <>
            <h2>Products</h2>
            {
                products.map((product, index) => <div key={index}><span>{product.name} - {product.price}</span>
                    <button onClick={() => onAdd(product.name)}>Add To Cart</button>
                </div>)
            }
        </>
    )
}