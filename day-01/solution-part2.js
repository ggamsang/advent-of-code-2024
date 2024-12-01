"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var countNum = function (ary, num) { return ary.reduce(function (count, current) { return current === num ? count + 1 : count; }, 0); };
var solution = function (input) {
    return new Promise(function (resolve) {
        // split and sort each
        var left = input.filter(function (_num, index) { return index % 2 === 0; }).sort();
        var right = input.filter(function (_num, index) { return index % 2 !== 0; }).sort();
        var similarity = [];
        // calc similarity
        for (var _i = 0, left_1 = left; _i < left_1.length; _i++) {
            var lefy = left_1[_i];
            similarity.push(lefy * countNum(right, lefy));
        }
        resolve(similarity.reduce(function (a, c) { return a + c; }));
    });
};
var inputFile = path.join(__dirname, 'input.txt');
var fileContent = fs.readFileSync(inputFile, 'utf-8');
var parsedInput = fileContent
    .split('\n')
    .filter(function (line) { return line.trim() !== ''; })
    .flatMap(function (line) { return line.split(/\s+/).map(Number); });
solution(parsedInput).then(console.log);
