import React, { Component } from 'react';
import logo from './icons/logo.svg';
import './App.css';
import AvailableUnits from './AvailableUnits/AvailableUnits.js';
import OngoingIncidents from './OngoingIncidents/OngoingIncidents.js';
import OnDutyUnits from './OnDutyUnits/OnDutyUnits.js';
import UnavailableUnits from './UnavailableUnits/UnavailableUnits.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <div className="dashboard">
                    <div className="left, column">
                        <OngoingIncidents />
                    </div>
                    <div className="middle, column">
                        <OnDutyUnits />
                    </div>
                    <div className="right, column">
                        <AvailableUnits />
                        <UnavailableUnits />
                    </div>
                </div>
            </div>
        );
  }
}

export default App;
