import React from 'react';

import { Navbar, FloatingButton } from './components/Common';
import Main from './container/Main';

import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Main />
      </div>
      <FloatingButton />
    </div>
  );
};

export default App;
