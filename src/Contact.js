import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import ContactForm from './components/contact';
import './static/css/index.css';
import './static/css/contact.css';
import './App.css';

class Contact extends Component {
  render() {
    return (
      <div className="App">
        <Header />
            <ContactForm />    
        <Footer />
      </div>
    );
  }
}

export default Contact;