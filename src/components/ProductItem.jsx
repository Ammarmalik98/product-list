import React from 'react';
import iconAddToCart from '../assets/images/icon-add-to-cart.svg';
import iconIncrement from '../assets/images/icon-increment-quantity.svg';
import iconDecrement from '../assets/images/icon-decrement-quantity.svg';

const ProductItem = ({ product, cartItem, addToCart, removeFromCart, incrementQuantity }) => {
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="product-item">
      <div className="image-container">
        <picture>
          <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
          <source media="(min-width: 768px)" srcSet={product.image.tablet} />
          <img src={product.image.mobile} alt={product.name} className={quantity > 0 ? "active" : ""} />
        </picture>
        
        {quantity === 0 ? (
          <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
            <img src={iconAddToCart} alt="" />
            Add to Cart
          </button>
        ) : (
          <div className="quantity-controls">
            <button className="decrement-btn" onClick={() => removeFromCart(product.name)}>
              <img src={iconDecrement} alt="Decrease quantity" />
            </button>
            <span>{quantity}</span>
            <button className="increment-btn" onClick={() => incrementQuantity(product.name)}>
              <img src={iconIncrement} alt="Increase quantity" />
            </button>
          </div>
        )}
      </div>

      <div className="product-info">
        <p className="category">{product.category}</p>
        <h3 className="name">{product.name}</h3>
        <p className="price">${product.price.toFixed(2)}</p>
      </div>

      <style>{`
        .product-item {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .image-container {
          position: relative;
          margin-bottom: 1.5rem;
        }

        .image-container img {
          width: 100%;
          border-radius: 8px;
          display: block;
        }
        
        .image-container img.active {
          border: 2px solid var(--color-red);
        }

        .add-to-cart-btn {
          position: absolute;
          bottom: -22px;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          border: 1px solid var(--color-rose-400);
          color: var(--color-rose-900);
          padding: 0.75rem 1.75rem;
          border-radius: 999px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          white-space: nowrap;
          transition: border-color 0.2s, color 0.2s;
        }

        .add-to-cart-btn:hover {
          border-color: var(--color-red);
          color: var(--color-red);
        }

        .quantity-controls {
          position: absolute;
          bottom: -22px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--color-red);
          color: white;
          padding: 0.75rem 1rem;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2.5rem;
          width: 160px;
        }
        
        .decrement-btn, .increment-btn {
            display: flex; 
            align-items: center; 
            justify-content: center;
            width: 20px;
            height: 20px;
            border: 1px solid white;
            border-radius: 50%;
            padding: 4px;
        }
         
        .decrement-btn:hover, .increment-btn:hover {
            background-color: white;
        }
        
        .decrement-btn:hover img, .increment-btn:hover img {
            filter: invert(42%) sepia(93%) saturate(1352%) hue-rotate(345deg) brightness(88%) contrast(98%);
        }

        .product-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .category {
          color: var(--color-rose-500);
          font-size: 0.875rem;
        }

        .name {
          font-size: 1rem;
          font-weight: 600;
        }

        .price {
          color: var(--color-red);
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default ProductItem;
