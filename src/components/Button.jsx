import React from 'react';

class Button extends React.Component {
    render(){
        return(
            <button
                className={`button ${this.props.shape}`}
                onClick={() => this.props.onClick(this.props.value)}
            >
                {this.props.value}
            </button>
        );
    }
}

export class RectangleButton extends Button {
    render(){
        return(
            <Button
                shape="rectangle"
                value={this.props.value}
                onClick={() => this.props.onClick(this.props.value)}
            />
        )
    }
}

export class SquareButton extends Button {
    render(){
        return(
            <Button
                shape="square"
                value={this.props.value}
                onClick={() => this.props.onClick(this.props.value)}
            />
        )
    }
}
