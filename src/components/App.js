import React, { Fragment } from 'react';

import Header from './layout/Header';
import Meals from './features/meals/Meals';

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;