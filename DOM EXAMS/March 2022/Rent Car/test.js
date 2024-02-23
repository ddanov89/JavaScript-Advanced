import { expect } from "chai";
import { rentCar } from "./rentCar.js";

describe('test Suite', function () {
    describe('testing searchCar', () => {
        it('return value should accept an array and string', () => {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Audi')).to.equal(`There is 1 car of model Audi in the catalog!`);
        });
        it('return value should accept an array and string', () => {
            expect(() => rentCar.searchCar([], 'Audi')).to.throw('There are no such models in the catalog!');
        });
        it('throws an error with non-array', () => {
            expect(() => rentCar.searchCar("Volkswagen", 'Volkswagen')).to.throw("Invalid input!");
        });
        it('throws an error with non-string', () => {
            expect(() => rentCar.searchCar("Volkswagen", 1)).to.throw("Invalid input!");
        });
        it('throws an error with non-string', () => {
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Lada")).to.throw('There are no such models in the catalog!');
        });
        it('throws an error with non-string', () => {
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], '')).to.throw('There are no such models in the catalog!');
        });
    });
    describe('testing calculatePriceOfCar', () => {
        it('return value with a match', () => {
            expect(rentCar.calculatePriceOfCar("Audi", 1)).to.equal(`You choose Audi and it will cost $36!`);
        });
        it('return value with no match', () => {
            expect(() => rentCar.calculatePriceOfCar("Lada", 1)).to.throw('No such model in the catalog!');
        });
        it('throws an error with invalid input', () => {
            expect(() => rentCar.calculatePriceOfCar(1, 1)).to.throw("Invalid input!");
        });
        it('throws an error with invalid input', () => {
            expect(() => rentCar.calculatePriceOfCar("Audi", [])).to.throw("Invalid input!");
        });
        it('throws an error with invalid input', () => {
            expect(() => rentCar.calculatePriceOfCar("Audi", 1.5)).to.throw("Invalid input!");
        });
    });
    describe('testing checkBudget', () => {
        it('testing with bigger budget', () => {
            expect(rentCar.checkBudget(1, 1, 2)).to.equal('You rent a car!');
        });
        it('testing with bigger budget', () => {
            expect(rentCar.checkBudget(1, 1, 2)).to.equal('You rent a car!');
        });
        it('testing with bigger budget', () => {
            expect(rentCar.checkBudget(1, 1, 1)).to.equal('You rent a car!');
        });
        it('testing with smaller budget', () => {
            expect(rentCar.checkBudget(2, 1, 1)).to.equal('You need a bigger budget!');
        });
        it('throws an error with invalid input', () => {
            expect(() => rentCar.checkBudget("Audi", 1, 1)).to.throw("Invalid input!");
        });
        it('throws an error with invalid input', () => {
            expect(() => rentCar.checkBudget(1, "Audi", 1)).to.throw("Invalid input!");
        });
        it('throws an error with invalid input', () => {
            expect(() => rentCar.checkBudget(1, 1, 'Audi')).to.throw("Invalid input!");
        });
        it('throws an error with invalid input', () => {
            expect(() => rentCar.checkBudget(1.5, 1, 1)).to.throw("Invalid input!");
        });
        it('throws an error with invalid input', () => {
            expect(() => rentCar.checkBudget(1, 1.5, 1)).to.throw("Invalid input!");
        });
        it('throws an error with invalid input', () => {
            expect(() => rentCar.checkBudget(1, 1, 1.5)).to.throw("Invalid input!");
        });
    });
});