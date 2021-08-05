import React from 'react';

import classes from './AvailableMeals.module.css';
import { DUMMY_MEALS }  from '../../../constants';



const AvailableMeals = () => {
  
  const renderedMeals = DUMMY_MEALS.map(meal => {
    return (
      <li key={meal.id}>
        {meal.name}
      </li>
    );
  });
  
  return (
    <section className={classes.meals}>
      <ul>
        {renderedMeals}
      </ul>
    </section>
  );
};

export default AvailableMeals;