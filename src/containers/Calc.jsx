import React from 'react';
import { Calc } from './../components/Calc';
import * as keys from './Keys';

class CalcContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onDisplay: [0],
            pendingNewInput: true,
            pendingOperation: undefined,
            storedNumber: []
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleMouseClick = this.handleMouseClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress, false);
    }

    digitInput(digit) {
        if (this.state.onDisplay.length > 9) {
            return;
        }

        if (this.state.pendingNewInput) {
            this.setState({
                onDisplay: [digit],
                pendingNewInput: false
            })
        } else {
            this.setState({
                onDisplay: [...this.state.onDisplay.slice(), digit]
            });
        }
    }

    clear() {
        this.setState({
            onDisplay: [0],
            pendingNewInput: true,
            pendingOperation: undefined,
            storedNumber: []
        })
    }

    operation(value) {
        this.setState({
            pendingOperation: value,
            pendingNewInput: true,
            storedNumber: [...this.state.onDisplay.slice()]
        })
    }

    summarise() {
        const pendingOperation = this.state.pendingOperation;

        if(!pendingOperation) {
            return;
        }

        const num1 = +(this.state.storedNumber.join(''));
        const num2 = +(this.state.onDisplay.join(''));
        let result = 0;

        if (keys.isAddition(pendingOperation)) {
            result = num1 + num2;
        } else if (keys.isSubtraction(pendingOperation)) {
            result = num1 - num2;
        } else if (keys.isMultiplication(pendingOperation)) {
            result = num1 * num2;
        } else if (keys.isDivision(pendingOperation)) {
            result = num1 / num2;
            result = Math.round(result); // remove when introducing decimals
        }

        result = (result.toString().length > 10) ? "OVER9000!!!" : result;

        this.setState({
            onDisplay: [result],
            pendingNewInput: true,
            storedNumber: [],
            pendingOperation: undefined
        })
    }

    handleKeyPress(event) {
        if (event.key === "Enter" || event.code === "Space") {
            event.preventDefault();
        }
        this.handleAction(event.key);
    }
    
    handleMouseClick(key) {
        this.handleAction(key);
    }

    handleAction(action) {
        if(keys.isNumber(action)) {
            this.digitInput(parseInt(action));
        } else if(keys.isClearButton(action)) {
            this.clear();
        } else if(keys.isSummarize(action)) {
            this.summarise();
        } else if(keys.isOperation(action)) {
            this.operation(action);
        } else {
            return;
        }
    }

    render(){
        return(
            <Calc
                number={this.state.onDisplay}
                onClick={this.handleMouseClick}
                onKeyPress={this.handleKeyPress}
            />
        )
    }
}

export default CalcContainer;
