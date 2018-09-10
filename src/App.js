import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Experience from './components/experience';
// import logo from './logo.svg';
import './static/css/index.css';
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