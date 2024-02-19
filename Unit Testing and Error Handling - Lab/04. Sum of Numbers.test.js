import { assert } from "chai";
import { sum } from "./sumOfNumbers.js";
import { it } from "mocha";

describe("test sum functionality", () => {
    it('test with invalid value', () => {
        assert.isNaN(sum('string'), "return value must be NaN");
    });
    it('test with valid value', () => {
        assert.equal(sum([]), 0, "result value is correct");
        assert.equal(sum([1, 2, 3]), 6, "result value is correct");
    })
});