import React from 'react';
import '../styles/ProductCard.css';

export default function ProductCard({product, onViewDetails}){
  return (
    <article className="card">
      <div className="media">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <span className="category">{product.category}</span>
        <p className="card-price">{product.price}</p>
        <p className="card-desc">{product.description.length > 100 ? product.description.slice(0,100) + '...' : product.description}</p>
        <div className="card-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="view-details" onClick={onViewDetails}>View Details</button>
        </div>
      </div>
    </article>
  );
}
