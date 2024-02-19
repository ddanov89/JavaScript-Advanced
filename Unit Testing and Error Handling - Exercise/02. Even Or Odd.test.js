import { assert } from "chai";
import { isOddOrEven } from "./isOddOrEven";
import { it } from "mocha";

describe("isOddOrEven", () => {
    it("test with no string value", () => {
        assert.equal(isOddOrEven({prop: 'pesho'}), undefined, "return type must be undefined");
        assert.equal(isOddOrEven(5), undefined, "return type must be undefined");
        assert.isNotOk(isOddOrEven([]), undefined, "return type must be undefined");
    });
    it("test with valid string value", () => {
        assert.equal(isOddOrEven("pesho"), "odd", "result is correct (odd)");
        assert.equal(isOddOrEven("Goshoo"), "even", "result is correct (even)");

    })
})