"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var abs = function (a) { return a > 0 ? a : -a; };
var solution = function (input) {
    return new Promise(function (resolve) {
        console.log(input);
        // split and sort each
        var left = input.filter(function (_num, index) { return index % 2 === 0; }).sort();
        var right = input.filter(function (_num, index) { return index % 2 !== 0; }).sort();
        var disparity = [];
        // calc disparity same rank
        for (var i = 0; i < left.length; ++i) {
            disparity.push(abs(left[i] - right[i]));
        }
        resolve(disparity.reduce(function (a, c) { return a + c; }));
    });
};
var inputFile = path.join(__dirname, 'input.txt');
var fileContent = fs.readFileSync(inputFile, 'utf-8');
var parsedInput = fileContent
    .split('\n') // 줄 단위로 분리
    .filter(function (line) { return line.trim() !== ''; }) // 빈 줄 제거
    .flatMap(function (line) { return line.split(/\s+/).map(Number); }); // 공백으로 분리하고 숫자로 변환
solution(parsedInput).then(console.log);
