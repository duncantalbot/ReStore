import { useEffect, useState } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://localhost:5001/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []) // run once when empty

    return (
        <>
            <ProductList products={products} />           
        </>
    )
}

// function useState<T>(arg0: never[]): [any, any] {
//     throw new Error("Function not implemented.");
// }


// function useEffect(arg0: () => void, arg1: never[]) {
//     throw new Error("Function not implemented.");
// }
