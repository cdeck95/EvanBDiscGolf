import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Portfolio from './components/portfolio';
import Testimonials from  './components/testimonials';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <About/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
        {/* test */}
      </div>
  );
}

export default App;
