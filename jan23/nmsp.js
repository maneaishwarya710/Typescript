"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathOperations = void 0;
var MathOperations;
(function (MathOperations) {
    function addNums(a, b) {
        return a + b;
    }
    MathOperations.addNums = addNums;
    function subtract(a, b) {
        return a - b;
    }
    MathOperations.subtract = subtract;
    MathOperations.PI = 3.14;
})(MathOperations || (exports.MathOperations = MathOperations = {}));
