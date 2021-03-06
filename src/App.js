import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Experience from './components/experience';
import './static/css/index.css';
import './static/css/experience.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
            <Experience />    
        <Footer />
      </div>
    );
  }
}

export default App;