import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, cart, addToCart, removeFromCart, incrementQuantity }) => {
  return (
    <div className="product-list-container">
      <h1 style={{ color: '#b71c1c' }}>Desserts</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductItem
            key={product.name}
            product={product}
            cartItem={cart.find((item) => item.name === product.name)}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            incrementQuantity={incrementQuantity}
          />
        ))}
      </div>

      <style>{`
        .product-list-container h1 {
          margin-bottom: 2rem;
          font-size: 2.5rem;
        }

        .product-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem 1.5rem;
        }

        @media (min-width: 600px) {
            .product-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (min-width: 1000px) { /* Adjust breakpoint as needed for "Desktop" feel */
            .product-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }
      `}</style>
    </div>
  );
};

export default ProductList;
