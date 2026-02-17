import React from 'react';
import iconRemove from '../assets/images/icon-remove-item.svg';
import iconCarbonNeutral from '../assets/images/icon-carbon-neutral.svg';
import illustrationEmptyCart from '../assets/images/illustration-empty-cart.svg';

const Cart = ({ cart, removeFromCart, confirmOrder }) => {
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div className="cart-container">
            <h2>Your Cart ({totalQuantity})</h2>

            {cart.length === 0 ? (
                <div className="empty-cart">
                    <img src={illustrationEmptyCart} alt="Empty Cart" />
                    <p>Your added items will appear here</p>
                </div>
            ) : (
                <>
                    <ul className="cart-items">
                        {cart.map((item) => (
                            <li key={item.name} className="cart-item">
                                <div className="item-details">
                                    <h4>{item.name}</h4>
                                    <div className="item-price-info">
                                        <span className="quantity">{item.quantity}x</span>
                                        <span className="price-per-unit">@ ${item.price.toFixed(2)}</span>
                                        <span className="item-total">${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                </div>
                                <button className="remove-btn" onClick={() => removeFromCart(item.name, true)}>
                                    <img src={iconRemove} alt="Remove item" />
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="cart-total">
                        <span>Order Total</span>
                        <span className="total-price">${totalPrice.toFixed(2)}</span>
                    </div>

                    <div className="carbon-neutral">
                        <img src={iconCarbonNeutral} alt="Carbon Neutral" />
                        <p>This is a <strong>carbon-neutral</strong> delivery</p>
                    </div>

                    <button className="confirm-order-btn" onClick={confirmOrder}>
                        Confirm Order
                    </button>
                </>
            )}

            <style>{`
        .cart-container {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          height: fit-content;
        }

        .cart-container h2 {
          color: var(--color-red);
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .empty-cart {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 1rem 0;
        }

        .empty-cart p {
          color: var(--color-rose-500);
          font-weight: 600;
        }

        .cart-items {
          list-style: none;
          margin-bottom: 1.5rem;
        }

        .cart-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1rem;
          margin-bottom: 1rem;
          border-bottom: 1px solid var(--color-rose-100);
        }

        .item-details h4 {
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }

        .item-price-info {
          display: flex;
          gap: 1rem;
          font-size: 0.875rem;
        }

        .quantity {
          color: var(--color-red);
          font-weight: 600;
        }

        .price-per-unit {
          color: var(--color-rose-500);
        }

        .item-total {
          color: var(--color-rose-500);
          font-weight: 600;
        }

        .remove-btn {
          border: 1px solid var(--color-rose-400);
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .remove-btn:hover {
          border-color: var(--color-rose-900);
        }
        
        .remove-btn:hover img {
           filter: brightness(0);
        }

        .cart-total {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .cart-total span:first-child {
          color: var(--color-rose-900);
          font-size: 0.875rem;
        }

        .total-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-rose-900);
        }

        .carbon-neutral {
          background: var(--color-rose-50);
          padding: 1rem;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .carbon-neutral p {
          font-size: 0.875rem;
        }

        .confirm-order-btn {
          width: 100%;
          background: var(--color-red);
          color: white;
          padding: 1rem;
          border-radius: 999px;
          font-weight: 600;
          font-size: 1rem;
          transition: background 0.2s;
        }

        .confirm-order-btn:hover {
          background: #952C0B; 
        }
      `}</style>
        </div>
    );
};

export default Cart;
