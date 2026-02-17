import React from 'react';
import iconOrderConfirmed from '../assets/images/icon-order-confirmed.svg';

const ConfirmationModal = ({ cart, startNewOrder }) => {
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <img src={iconOrderConfirmed} alt="Order Confirmed" className="confirmed-icon" />
                <h1>Order Confirmed</h1>
                <p className="subtitle">We hope you enjoy your food!</p>

                <div className="order-summary">
                    <ul className="order-items">
                        {cart.map((item) => (
                            <li key={item.name} className="order-item">
                                <div className="item-info">
                                    <img src={item.image.thumbnail} alt={item.name} className="thumbnail" />
                                    <div className="details">
                                        <h4>{item.name}</h4>
                                        <div className="price-details">
                                            <span className="quantity">{item.quantity}x</span>
                                            <span className="price">@ ${item.price.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="item-total">${(item.price * item.quantity).toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="order-total">
                        <span>Order Total</span>
                        <span className="total-price">${totalPrice.toFixed(2)}</span>
                    </div>
                </div>

                <button className="new-order-btn" onClick={startNewOrder}>
                    Start New Order
                </button>
            </div>

            <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: flex-end; /* Mobile: start from bottom */
          justify-content: center;
          z-index: 1000;
        }

        @media (min-width: 768px) {
          .modal-overlay {
            align-items: center;
          }
        }

        .modal-content {
          background: white;
          width: 100%;
          max-width: 592px;
          padding: 2.5rem;
          border-radius: 12px 12px 0 0; /* Mobile: rounded top only */
          max-height: 90vh;
          overflow-y: auto;
        }

        @media (min-width: 768px) {
          .modal-content {
            border-radius: 12px;
          }
        }

        .confirmed-icon {
          margin-bottom: 1.5rem;
        }

        .modal-content h1 {
          font-size: 2.5rem;
          line-height: 1.1;
          margin-bottom: 0.5rem;
        }

        .subtitle {
          color: var(--color-rose-500);
          margin-bottom: 2rem;
        }

        .order-summary {
          background: var(--color-rose-50);
          padding: 1.5rem;
          border-radius: 8px;
          margin-bottom: 2rem;
        }

        .order-items {
          list-style: none;
        }

        .order-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1rem;
          margin-bottom: 1rem;
          border-bottom: 1px solid var(--color-rose-100);
        }
        
        .order-item:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0.5rem; /* slightly less padding */
        }
        
        /* Add border back for the list itself if items are not last? No, structure is list inside container. */
        /* Let's just fix the last item border */

        .item-info {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .thumbnail {
          width: 48px;
          height: 48px;
          border-radius: 4px;
        }

        .details h4 {
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          max-width: 150px;
        }
        
        @media (min-width: 400px) {
             .details h4 {
                 max-width: 200px;
             }
        }

        .price-details {
          font-size: 0.875rem;
          display: flex;
          gap: 0.5rem;
        }
        
        .quantity {
          color: var(--color-red);
          font-weight: 600;
        }

        .price {
          color: var(--color-rose-500);
        }

        .item-total {
          font-weight: 600;
          color: var(--color-rose-900);
        }

        .order-total {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-rose-100); /* wait, the previous items had borders. */
        }
        
        /* Wait, the design usually has the summary items in a block, then total at bottom of that block. */
        /* My previous styling might need adjustment. */
        /* Let's ensure the list has a bottom margin to separate from total */
        
        .order-items {
            margin-bottom: 1.5rem; 
        }

        .order-total span:first-child {
          font-size: 0.875rem;
          color: var(--color-rose-900);
        }

        .total-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-rose-900);
        }

        .new-order-btn {
          width: 100%;
          background: var(--color-red);
          color: white;
          padding: 1rem;
          border-radius: 999px;
          font-weight: 600;
          font-size: 1rem;
          transition: background 0.2s;
        }

        .new-order-btn:hover {
          background: #952C0B; 
        }
      `}</style>
        </div>
    );
};

export default ConfirmationModal;
