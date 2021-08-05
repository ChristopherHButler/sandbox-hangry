import React, { useContext } from 'react';

import CartContext from '../../../store/cart-context';
import CartItem from './CartItem';
import Modal from '../../common/Modal';
import classes from './styles/Cart.module.css';



const Cart = ({ onClose }) => {

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const onAddItem = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
  };

  const onRemoveItem = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = cartCtx.items.map(item => <CartItem key={item.id} item={item} onAdd={onAddItem.bind(null, item)} onRemove={onRemoveItem.bind(null, item.id)} />);

  return (
    <Modal onClose={onClose}>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onClose}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;