import React from "react";
import Product from "./Product";

const ProductList = () => {
    const products = [
        { name: "Laptop", price: 800, category: "Electronics" },
        { name: "Chair", price: 50, category: "Furniture" },
        { name: "Smartphone", price: 600, category: "Electronics" },
        { name: "Table", price: 120, category: "Furniture" },
        { name: "Headphones", price: 100, category: "Electronics" },
    ];

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {products.map((p, index) => (
                <Product key={index} name={p.name} price={p.price} category={p.category} />
            ))}
        </div>
    );
};

export default ProductList;
