import React, { Component } from 'react';
import Header from './Components/Header'
import Banner from './Components/Banner'
import Features from './Components/Features';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import CounterArea from './Components/CounterArea';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

// Main App Class to hold all the UI Components together 
class App extends Component {
  render() {
    return (
      <div>
      <Banner />
      <Header />
      <Features />
      <About />
      <Portfolio />
      <CounterArea />
      <Contact />
      <Footer />
      </div>);
         
  }
}

export default App;