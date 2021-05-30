import React from 'react';
import Title from './components/Title';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Work from './components/Work';

function App() {
  return (
    <div className="container">
      <Title/>
      <Navbar/>
      <Introduction/> 
      <Work/>
    </div>
  );
}

export default App;
