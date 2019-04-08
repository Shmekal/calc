
const keys = {
    NUMBERS: ["1","2","3","4","5","6","7","8","9","0"],
    OPERATIONS: {
        ADD: ["+"],
        SUBTRACT: ["-"],
        MULTIPLY: ["*", "x"],
        DIVIDE: ["/"]
    },
    SUMMARIZE: ["=", "Enter"],
    CLEAR: ["Escape", "clear"]
};

const isClearButton = (button) => {
    return keys.CLEAR.indexOf(button) !== -1;
}

const isAddition = (button) => {
    return keys.OPERATIONS.ADD.indexOf(button) !== -1;
}

const isSubtraction = (button) => {
    return keys.OPERATIONS.SUBTRACT.indexOf(button) !== -1;
}

const isMultiplication = (button) => {
    return keys.OPERATIONS.MULTIPLY.indexOf(button) !== -1;
}

const isDivision = (button) => {
    return keys.OPERATIONS.DIVIDE.indexOf(button) !== -1;
}

const isOperation = (button) => {
    return isAddition(button) || isSubtraction(button) || isMultiplication(button) || isDivision(button);
}

const isSummarize = (button) => {
    return keys.SUMMARIZE.indexOf(button) !== -1;
}

const isNumber = (button) => {
    return keys.NUMBERS.indexOf(button) !== -1;
}

export {
    isClearButton,
    isAddition,
    isSubtraction,
    isMultiplication,
    isDivision,
    isOperation,
    isSummarize,
    isNumber
};
