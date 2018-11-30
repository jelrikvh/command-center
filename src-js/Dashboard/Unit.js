import React, { Component } from 'react';
import './Unit.css';
import role1 from '../icons/rank-1.svg';
import role2 from '../icons/rank-2.svg';
import role3 from '../icons/rank-3.svg';
import toprole from '../icons/rank-top.svg';

class Unit extends Component {
    render() {
        let unitLabels = '';
        let unitRoleImg;

        if (this.props.info.status === "busy") {
            unitLabels = <span className="status">busy</span>;
        }

        switch (this.props.info.role) {
            case 'vop':
                unitRoleImg = role1;
                break;

            case 'vp':
                unitRoleImg = role2;
                break;

            case 'wv':
                unitRoleImg = role3;
                break;

            case 'iv':
                unitRoleImg = toprole;
                break;

            default:

        }

        return (
            <li className="unit">
                <img className="role" src={unitRoleImg} alt={this.props.info.role} />
                <div className="name">
                    {this.props.info.name}
                </div>
                <div className="labels">
                    {unitLabels}
                </div>
                <div className="tags">
                    D D VP
                </div>
            </li>
        );
  }
}

export default Unit;
