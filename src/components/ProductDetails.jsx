import React from 'react';
import '../styles/ProductDetails.css';

export default function ProductDetails({product, onClose}){
  return (
    <div className="details-wrapper">
      <div className="details-card">
        <button className="close" onClick={onClose}>×</button>
        <div className="details-grid">
          <div className="details-media">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="details-info">
            <h2>{product.title}</h2>
            <span className="category">{product.category}</span>
            <p className="price">{`$${product.price}`}</p>
            <p>{product.description}</p>
            <div className="actions-row">
              <button className="add-to-cart">Add to Cart</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
