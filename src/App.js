import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventForms from './components/eventForms/EventForm';
import CreateEventForms from "./components/events/CreateEventForm";

// import ReactFinalForm from "./components/reactFinalForm";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
export const showResults = async values =>{
  await sleep(500);
  window.alert(JSON.stringify(values, undefined, 2));
}


class App extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          <h1>Hello world</h1>
        </header>
        <EventForms />          
        {/* <CreateEventForms /> */}
      </div>;
  }
}

export default App;
