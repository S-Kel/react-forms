import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactFinalForm from "./components/reactFinalForm";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
export const showResults = async values =>{
  await sleep(500);
  window.alert(JSON.stringify(values, undefined, 2));
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">          
        </header>
        <ReactFinalForm/>
      </div>
    );
  }
}

export default App;
