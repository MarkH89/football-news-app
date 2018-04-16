import React, { Component } from 'react';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import News from './components/News/News';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
            <div className="section">
              <News query='wsl' pageSize='6' page="1" />
            </div>
        <Footer />
      </div>
    );
  }
}

export default App;
