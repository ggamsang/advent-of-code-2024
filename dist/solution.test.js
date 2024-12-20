"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const solution_1 = require("./solution");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
// 테스트 데이터
const testInput = [3, 4, 4, 3, 2, 5, 1, 3, 3, 9, 3, 3];
const expectedOutput = 11;
test('solution function works correctly', () => __awaiter(void 0, void 0, void 0, function* () {
    expect(yield (0, solution_1.solution)(testInput)).toBe(expectedOutput);
}));
test('solution function works correctly with input.txt file', () => __awaiter(void 0, void 0, void 0, function* () {
    const inputFile = path.join(__dirname, 'input.txt');
    const fileContent = fs.readFileSync(inputFile, 'utf-8');
    const parsedInput = fileContent
        .split('\n')
        .flatMap((line) => line
        .trim()
        .split(/\s+/)
        .map(Number));
    console.log(parsedInput);
    const result = yield (0, solution_1.solution)(parsedInput);
    console.log('Result from input.txt:', result);
    expect(typeof result).toBe('number');
}));
