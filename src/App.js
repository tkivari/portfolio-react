import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Skills from './components/skills';
import Experience from './components/experience';
// import logo from './logo.svg';
import './static/css/index.css';
import './static/css/experience.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Skills /> */}
        <Experience />
        <Footer />
      </div>
    );
  }
}

export default App;