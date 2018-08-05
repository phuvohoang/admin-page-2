import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Routes/> 
      </div>  
    );
  }
}

export default App;
