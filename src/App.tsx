import React from 'react';
import Title from './components/Title';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Work from './components/Work';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Title/>
      <Navbar/>
      <Introduction/> 
      <Work/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
