import React from 'react';

import { Navbar } from './components';
import Routes from './routes';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <div className="footer" />
    </div>
  );
};

export default App;
