import React from 'react';

export class Display extends React.Component {
    render() {
        return(
        <div>
            {this.props.number}
        </div>
        )
    }
}
