import React, { Component } from 'react';
import '../AvailableUnits/AvailableUnits.css';
import UnitList from "../Dashboard/UnitList";

class AvailableUnits extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <UnitList title="unavailable" units={
                [
                    {"name": "Eelco", "role": "wv"},
                    {"name": "Jelrik", "role": "wv"},
                    {"name": "Marlon", "role": "vop"},
                    {"name": "Pieter", "role": "wv"}
                ]
            } />
        );
    }
}

export default AvailableUnits;
