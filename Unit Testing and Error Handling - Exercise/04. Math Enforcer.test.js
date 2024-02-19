import { mathEnforcer } from "./mathEnforcer.js";
import { assert } from "chai";
import { it } from "mocha";

describe('test addFive functionality', () => {
    it("test with invalid value", () => {
        assert.isUndefined(mathEnforcer.addFive('pesho'), "return value must be undefined");
        assert.isUndefined(mathEnforcer.addFive([]), "return value must be undefined");
        assert.isUndefined(mathEnforcer.addFive("5"), "return value must be undefined");
    });
    it('test with valid value', () => {
        assert.equal(mathEnforcer.addFive(-10), -5, "value is correct");
        assert.equal(mathEnforcer.addFive(-5), 0, "value is correct");
        assert.equal(mathEnforcer.addFive(0), 5, "value is correct");
        assert.equal(mathEnforcer.addFive(5), 10, "value is correct");
        assert.equal(mathEnforcer.addFive(5.5), 10.5, "value is correct");
    });
})
describe('test subtractTen functionality', () => {
    it('test with invalid value', () => {
        assert.isUndefined(mathEnforcer.subtractTen('pesho'), "return value must be undefined");
        assert.isUndefined(mathEnforcer.subtractTen([]), "return value must be undefined");
        assert.isUndefined(mathEnforcer.subtractTen("5"), "return value must be undefined");
    });
    it('test with valid value', () => {
        assert.equal(mathEnforcer.subtractTen(-10), -20, "value is correct");
        assert.equal(mathEnforcer.subtractTen(0), -10, "value is correct");
        assert.equal(mathEnforcer.subtractTen(10), 0, "value is correct");
        assert.equal(mathEnforcer.subtractTen(15), 5, "value is correct");
        assert.equal(mathEnforcer.subtractTen(15.5), 5.5, "value is correct");
    })
})
describe('test sum functionality', () => {
    it('test with invalid value', () => {
        assert.isUndefined(mathEnforcer.sum('pesho', 'Gosho'), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum('pesho', []), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum('pesho', 5), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum([], 10), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum("5", 10), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum(10, 'pesho'), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum(10, '10'), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum(10.5, '10'), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum('10', 10.5), "return value must be undefined");
    });
    it('test with valid value', () => {
        assert.equal(mathEnforcer.sum(-10, 10), 0, "result value is correct");
        assert.equal(mathEnforcer.sum(10, 0), 10, "result value is correct");
        assert.equal(mathEnforcer.sum(0, 0), 0, "result value is correct");
        assert.equal(mathEnforcer.sum(-10, -5), -15, "result value is correct");
        assert.equal(mathEnforcer.sum(10, 5), 15, "result value is correct");
        assert.equal(mathEnforcer.sum(10.5, 5), 15.5, "result value is correct");
        assert.equal(mathEnforcer.sum(1.5, 5.5), 7, "result value is correct");
        assert.equal(mathEnforcer.sum(1.5, 5), 6.5, "result value is correct");
        assert.equal(mathEnforcer.sum(-100.5, 50), -50.5, "result value is correct");
        assert.equal(mathEnforcer.sum(100.5, -50.5), 50, "result value is correct");
    })
})