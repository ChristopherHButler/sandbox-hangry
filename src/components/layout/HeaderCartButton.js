import React, { useContext, useEffect, useState } from 'react';

import CartContext from '../../store/cart-context';
import CartIcon from './CartIcon';
import classes from './styles/HeaderCartButton.module.css';



const HeaderCartButton = ({ onClick }) => {

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

  useEffect(() => {
    if (items.length === 0) return;
    setButtonIsHighlighted(true);

    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const btnClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump : ''}`;

  const numberOfCartItems = items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton; 