import React, {useState, useEffect} from 'react';

import generalStyle from './App.module.css';
import axios from 'axios';
import Header from './components/shared/header/header.jsx';
import Main from './components/pages/main/main.jsx';
import Footer from './components/shared/footer/footer.jsx';
import state from './data/state.js'


function App() {



  return (
    <div>
      <Header state={state} />
      <Main  />
      <Footer state={state}/> 
    </div>
  );
}

export default App;
