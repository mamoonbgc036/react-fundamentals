type Product = {
    title: string;
    price: number;
    inStock: boolean;
}

function ProductCard({ title, price, inStock }: Product) {
    return (
        <div>
            <p>{title}</p>
            <p>{price}</p>
            <p>{inStock ? 'In stock' : 'Out of stock'}</p>
        </div>
    )
}

export default ProductCard;