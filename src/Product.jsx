import React from "react";
import "./Product.css";

const Product = ({ name, price, category }) => {
    return (
        <div className={`product-card ${category === "Electronics" ? "electronics" : ""}`}>
            <h3 className="product-name">{name.toUpperCase()}</h3>
            <p className="product-price">Price: Rs. {price}</p>
            <p className="product-category">Category: {category}</p>
        </div>
    );
};

export default Product;
