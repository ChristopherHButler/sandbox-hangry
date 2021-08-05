import React, { useState } from 'react';

import CartProvider from '../store/CartProvider';

import Header from './layout/Header';
import Meals from './features/meals/Meals';
import Cart from './features/cart/Cart';

const App = () => {

  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      {showCart && <Cart onClose={() => setShowCart(false)} />}
      <Header setShowCart={setShowCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;