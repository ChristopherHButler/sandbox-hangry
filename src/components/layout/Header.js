import React, { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
import background from '../../assets/meals.jpg';



const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Hangry</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={background} alt="table of food" />
      </div>
    </Fragment>
  );
};

export default Header;