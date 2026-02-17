import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ConfirmationModal from './components/ConfirmationModal';
import data from './data.json';
import logo from '../public/pastry_logo.png';

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === product.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productName, removeAll = false) => {
    setCart((prevCart) => {
      if (removeAll) {
        return prevCart.filter((item) => item.name !== productName);
      }
      return prevCart.map((item) => {
        if (item.name === productName) {
          return item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : null;
        }
        return item;
      }).filter(Boolean); // Filter out nulls (removed items)
    });
  };

  const incrementQuantity = (productName) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === productName ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const startNewOrder = () => {
    setCart([]);
    setIsModalOpen(false);
  };

  return (
    <>
      <img src={logo} alt="Pastry Shop Logo" className="logo" width='200px' />
    <div className="container">
      <main>
        <ProductList
          products={data}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          incrementQuantity={incrementQuantity}
        />
      </main>
      <aside>
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          confirmOrder={() => setIsModalOpen(true)}
        />
      </aside>

      {isModalOpen && (
        <ConfirmationModal
          cart={cart}
          startNewOrder={startNewOrder}
        />
      )}
    </div>
    </>
    
  );
}

export default App;
