import React from 'react';
import './App.css';

// importing all components
import Header from './Header'
import SignupBanner from './SignupBanner'
import Tv from './Tv';


function App() {
  return (
    <div className="App">
      <Header/>
      <SignupBanner/>
      <Tv/>
    </div>
  );
}

export default App;
