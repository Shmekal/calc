import React, { Component } from 'react';
import { Keyboard } from './Keyboard';
import { Display } from './Display';
import './styles/Calc.css';

export class Calc extends Component {
    render() {
        return (
            <div className="app">
                <div className="display">
                    <Display number={this.props.number}/>
                </div>
                <Keyboard onClick={(i) => this.props.onClick(i)}/>
            </div>
        );
    }
}
