import React, {  } from 'react';

import classes from './styles/Input.module.css';



const Input = React.forwardRef(({ input, label }, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} id={input.id} {...input} />
    </div>
  );
});

export default  Input;