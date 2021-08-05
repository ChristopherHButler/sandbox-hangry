import React, { useContext } from 'react';

import CartContext from '../../../store/cart-context';
import MealItemForm from './MealItemForm';
import classes from './styles/MealItem.module.css';



const MealItem = ({ meal: { id, name, description, price: _price } }) => {

  const cartCtx = useContext(CartContext);

  const price = `$${_price.toFixed(2)}`;

  const onAddToCart = (amount) => {
    cartCtx.addItem({
      id,
      name,
      amount,
      price: _price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={onAddToCart} />
      </div>
    </li>
  );
};

export default MealItem;