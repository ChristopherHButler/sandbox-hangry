import React, { useRef, useState } from 'react';

import Input from '../../common/Input';
import classes from './styles/MealItemForm.module.css';



const MealItemForm = ({ id, onAddToCart }) => {

  const amountRef = useRef();

  const [isFormValid, setIsFormValid] = useState(true);

  const onFormSubmit = (e) => {
    e.preventDefault();

    const amt = amountRef.current.value;

    if (amt.trim().length === 0 || parseInt(amt) < 1 || parseInt(amt) > 5 ) {
      return setIsFormValid(false);
    }

    onAddToCart(parseInt(amt));

  };

  return (
    <form className={classes.form} onSubmit={onFormSubmit}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{ id: `amount_${id}`, type: 'number', min: '1', max: '5', step: '1', defaultValue: '1' }}
      />
      <button>+ Add</button>
      {!isFormValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
