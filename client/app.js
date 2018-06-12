import React from 'react';

import { Navbar } from './components';
import Routes from './routes';
// import Footer from './components/footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="body-container">
      <Routes />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
