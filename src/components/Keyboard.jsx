import React from 'react';
import { RectangleButton, SquareButton } from './Button';

export class Keyboard extends React.Component {
    render(){
        return(
            <div className="keyboard">
                <div className="row" key="1">
                    <RectangleButton value="clear" key="1" onClick={(i) => this.props.onClick(i)}/>
                    <SquareButton value="%" shape="square" key="2" onClick={() => this.props.onClick()}/>
                    <SquareButton value="/" shape="square" key="3" onClick={(i) => this.props.onClick(i)}/>
                </div>
                <div className="row" key="2">
                    <SquareButton value="7" shape="square" key="4" onClick={(i) => this.props.onClick(i)}/>
                    <SquareButton value="8" shape="square" key="5" onClick={(i) => this.props.onClick(i)}/>
                    <SquareButton value="9" shape="square" key="6" onClick={(i) => this.props.onClick(i)}/>
                    <SquareButton value="x" shape="square" key="7" onClick={(i) => this.props.onClick(i)}/>
                </div>
                <div className="row" key="3">
                    <SquareButton value="4" shape="square" key="8" onClick={(i) => this.props.onClick(i)}/>
                    <SquareButton value="5" shape="square" key="9" onClick={(i) => this.props.onClick(i)}/>
                    <SquareButton value="6" shape="square" key="10" onClick={(i) => this.props.onClick(i)}/>
                    <SquareButton value="-" shape="square" key="11" onClick={(i) => this.props.onClick(i)}/>
                </div>
                <div className="row" key="4">
                    <SquareButton value="1" shape="square" key="12" onClick={(i) => this.props.onClick(i)}/>
                    <SquareButton value="2" shape="square" key="13" onClick={(i) => this.props.onClick(i)}/>
                    <SquareButton value="3" shape="square" key="14" onClick={(i) => this.props.onClick(i)}/>
                    <SquareButton value="+" shape="square" key="15" onClick={(i) => this.props.onClick(i)}/>
                </div>
                <div className="row" key="5">
                    <RectangleButton value="0" shape="rectangle" key="16" onClick={(i) => this.props.onClick(i)}/>
                    <SquareButton value="." shape="square" key="17" onClick={() => this.props.onClick()}/>
                    <SquareButton value="=" shape="square" key="18" onClick={(i) => this.props.onClick(i)}/>
                </div>
            </div>
        );
    }
}
