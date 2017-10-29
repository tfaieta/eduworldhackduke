import React, { Component } from 'react';
import logo from './logo.svg';
import StudentForm from './Components/StudentForm/StudentForm.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Hi</h1>
        </header>
        <StudentForm/>
      </div>
    );
  }
}

export default App;
