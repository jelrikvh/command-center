import React, { Component } from 'react';
import './OnDutyUnits.css';
import UnitList from '../Dashboard/UnitList.js';

class OnDutyUnits extends Component {
    render() {
        return (
            <UnitList title="on duty" units={
                [
                    {"name": "Albert Pieter Jan", "role": "vop", "status": "scheduled"},
                    {"name": "Anneke", "role": "iv", "status": "busy", "label": "alpha-01"},
                    {"name": "Jan", "role": "vp", "status": "busy"},
                    {"name": "Rik", "role": "wv", "status": "scheduled", "label": "alpha-00"},
                    {"name": "Zacharias", "role": "vp", "status": "scheduled", "label": "alpha-00"}
                ]
            } />
        );
    }
}

export default OnDutyUnits;
