interface ProductList {
    onAdd: (product: string) => void
}

interface Product {
    name: string,
    price: number
}

export default function Product({ onAdd }: ProductList) {
    const products = [
        {
            name: 'soap',
            price: 50
        },
        {
            name: 'mobile',
            price: 5000
        },
        {
            name: 'laptop',
            price: 50000
        }
    ]

    return (
        <>
            {
                products.map((product: Product) => <li>{product.name}--{product.price} <button onClick={() => onAdd(product.name)}>Add</button></li>)
            }
        </>
    )
}