import React, { Component } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import News from './components/News/News';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <News />
        <Footer />
      </div>
    );
  }
}

export default App;
