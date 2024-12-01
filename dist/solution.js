"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = void 0;
const abs = (a) => a > 0 ? a : -a;
const solution = (input) => {
    return new Promise((resolve) => {
        // split and sort each
        const left = input.filter((_num, index) => index % 2 === 0).sort();
        const right = input.filter((_num, index) => index % 2 !== 0).sort();
        const disparity = [];
        // calc disparity same rank
        for (let i = 0; i < left.length; ++i) {
            disparity.push(abs(left[i] - right[i]));
        }
        resolve(disparity.reduce((a, c) => a + c));
    });
};
exports.solution = solution;
