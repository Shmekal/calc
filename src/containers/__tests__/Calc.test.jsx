import React from 'react';
import CalcContainer from '../Calc';

describe("Calc container", () => {
    it("digitInput", () => {
        const state = {
            onDisplay: [0]
        }

        digitInput(9);

        expect(this.state.onDisplay).toBe(9);
    });
});
