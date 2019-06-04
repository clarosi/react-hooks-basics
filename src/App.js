import React from 'react';

import Navbar from './components/Navbar';
import FoatingButton from './components/FloatingButton';
import Main from './container/Main';

import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Main />
        <FoatingButton />
      </div>
    </div>
  );
};

export default App;
