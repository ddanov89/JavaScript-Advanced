import { assert } from "chai";
import { isSymmetric } from "./checkForSymmetry.js";
import { it } from "mocha";

describe('test isSymmetric functionality', () => {
    it("test with invalid input", () => {
        assert.isFalse(isSymmetric(""), "input value cannot be a string");
        assert.isFalse(isSymmetric({}), "input value cannot be an object");
        assert.isFalse(isSymmetric(1), "input value cannot be a number");
    }),
    it('test with null and undefined input', () => {
        assert.isFalse(isSymmetric(null), "input value cannot be null");
        assert.isFalse(isSymmetric(undefined), 'input value cannot be undefined');
    }),
    it('test with valid input', () => {
        assert.equal(isSymmetric([1,3,1]), true, 'result value is correct');
    }),
    it('test with asymmetrical arrays', () => {
        assert.isFalse(isSymmetric([1, 4, 2]), "the provided array is asymmetrical");
        assert.isFalse(isSymmetric([1, 2, 3, 4]), "the provided array is asymmetrical");
    }),
    it('test with an empty array', ()=> {
        assert.equal(isSymmetric([]), true, 'result value is correct');
    })
});