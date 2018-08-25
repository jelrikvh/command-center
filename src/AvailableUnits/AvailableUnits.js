import React, { Component } from 'react';
import './AvailableUnits.css';
import UnitList from "../Dashboard/UnitList";

class AvailableUnits extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <UnitList title="available" units={
                [
                    {"name": "Amber", "role": "vop"},
                    {"name": "Bram", "role": "vp", "status": "busy"},
                    {"name": "Rijnyr", "role": "vop"}
                ]
            } />
        );
    }
}

export default AvailableUnits;