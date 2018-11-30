import React, { Component } from 'react';
import './UnitList.css';
import Unit from './Unit.js';

class UnitList extends Component {
    render() {
        let listItems = this.props.units.map((unit) =>
            <Unit info={unit} />
        );

        return (
            <div className="box">
                <h2 className="units-title">{this.props.title} ({this.props.units.length})</h2>
                <ul className="list">
                    {listItems}
                </ul>
            </div>
        );
  }
}

export default UnitList;
