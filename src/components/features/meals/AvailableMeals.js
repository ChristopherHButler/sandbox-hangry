import React from 'react';

import Card from '../../common/Card';
import MealItem from './MealItem';
import classes from './styles/AvailableMeals.module.css';
import { DUMMY_MEALS }  from '../../../constants';



const AvailableMeals = () => {

  const renderedMeals = DUMMY_MEALS.map(meal => <MealItem key={meal.id} meal={meal} />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {renderedMeals}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;