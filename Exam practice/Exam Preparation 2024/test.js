import { expect } from "chai";
import { planYourTrip } from "./planYourTrip.js";

describe('Test Suite', function () {

    describe('testing choosingDestination', () => {
        it('throws an error with invalid year', () => {
            expect(() => planYourTrip.choosingDestination("Ski Resort", 'Winter', 2023)).to.throw(`Invalid Year!`);
        });
        it('throws an error with invalid year', () => {
            expect(() => planYourTrip.choosingDestination(["Ski Resort"], ['Winter'], [2023])).to.throw(`Invalid Year!`);
        });
        it('throws an error with invalid year', () => {
            expect(() => planYourTrip.choosingDestination({}, {}, {})).to.throw(`Invalid Year!`);
        });
        it('throws an error with invalid year', () => {
            expect(() => planYourTrip.choosingDestination(1, 1, "")).to.throw(`Invalid Year!`);
        });
        it('throws an error with invalid year', () => {
            expect(() => planYourTrip.choosingDestination(1, 1, "")).to.throw(`Invalid Year!`);
        });
        it('throws an error with invalid year', () => {
            expect(() => planYourTrip.choosingDestination("Ski Resort", 'Winter', 2023.5)).to.throw(`Invalid Year!`);
        });
        it('throws an error with invalid year', () => {
            expect(() => planYourTrip.choosingDestination("Ski Resort", 'Winter', -2023)).to.throw(`Invalid Year!`);
        });
        it('throws an error with invalid year', () => {
            expect(() => planYourTrip.choosingDestination("Beach", 'Autumn', 2023)).to.throw(`Invalid Year!`);
        });
        it('throws an error with invalid year', () => {
            expect(() => planYourTrip.choosingDestination("Beach", 'Winter', 2023)).to.throw(`Invalid Year!`);
        });
        it('throws an error with invalid resort', () => {
            expect(() => planYourTrip.choosingDestination("Beach", 'Winter', 2024)).to.throw(`This destination is not what you are looking for.`);
        });
        it('return result tested with valid input', () => {
            expect(planYourTrip.choosingDestination("Ski Resort", 'Winter', 2024)).to.equal(`Great choice! The Winter is the perfect time to visit the Ski Resort.`);
        });
        it('return result tested with season(lowerCase)', () => {
            expect(planYourTrip.choosingDestination("Ski Resort", 'winter', 2024)).to.equal(`Consider visiting during the Winter for the best experience at the Ski Resort.`);
        });
        it('return result tested with with invalid season', () => {
            expect(planYourTrip.choosingDestination("Ski Resort", 'Summer', 2024)).to.equal(`Consider visiting during the Winter for the best experience at the Ski Resort.`);
        });
    });
    describe('testing exploreOptions', () => {

        let startArr = ["Skiing", "Snowboarding", "Winter Hiking"];

        let result = ["Skiing", "Winter Hiking"].join(', ');
        
        it('return result tested with an array and a number', () => {
            expect(planYourTrip.exploreOptions(startArr, 1)).to.equal(result);
        });
        it('throws an error with non-array', () => {
            expect(() => planYourTrip.exploreOptions('', 1)).to.throw("Invalid Information!");
        });
        it('throws an error with non-array', () => {
            expect(() => planYourTrip.exploreOptions(null, null)).to.throw("Invalid Information!");
        });
        it('throws an error with non-array', () => {
            expect(() => planYourTrip.exploreOptions(startArr, null)).to.throw("Invalid Information!");
        });
        it('throws an error with non-array', () => {
            expect(() => planYourTrip.exploreOptions(undefined, undefined)).to.throw("Invalid Information!");
        });
        it('throws an error with non-array', () => {
            expect(() => planYourTrip.exploreOptions(startArr, undefined)).to.throw("Invalid Information!");
        });
        it('throws an error with non-array', () => {
            expect(() => planYourTrip.exploreOptions('', 1)).to.throw("Invalid Information!");
        });
        it('throws an error with invalid number', () => {
            expect(() => planYourTrip.exploreOptions(startArr, -1)).to.throw("Invalid Information!");
        });
        it('throws an error with invalid number', () => {
            expect(() => planYourTrip.exploreOptions(startArr, '')).to.throw("Invalid Information!");
        });
        it('throws an error with invalid number', () => {
            expect(() => planYourTrip.exploreOptions(startArr, {})).to.throw("Invalid Information!");
        });
        it('throws an error with invalid number', () => {
            expect(() => planYourTrip.exploreOptions(startArr, [])).to.throw("Invalid Information!");
        });
        it('throws an error with invalid number', () => {
            expect(() => planYourTrip.exploreOptions(startArr, 1.5)).to.throw("Invalid Information!");
        });
        it('throws an error with invalid number', () => {
            expect(() => planYourTrip.exploreOptions(startArr, 3)).to.throw("Invalid Information!");
        });
        it('throws an error with invalid number', () => {
            expect(() => planYourTrip.exploreOptions(startArr, 4)).to.throw("Invalid Information!");
        });
    });
    describe('testing estimateExpenses', () => {
        it('result tested with two number', () => {
            expect(planYourTrip.estimateExpenses(25, 4)).to.equal(`The trip is budget-friendly, estimated cost is $100.00.`);
        });
        it('result tested with two number', () => {
            expect(planYourTrip.estimateExpenses(1.5, 1.5)).to.equal(`The trip is budget-friendly, estimated cost is $2.25.`);
        });
        it('return result tested with two number', () => {
            expect(planYourTrip.estimateExpenses(30, 30)).to.equal(`The estimated cost for the trip is $900.00, plan accordingly.`);
        });
        it('return result tested with two number', () => {
            expect(planYourTrip.estimateExpenses(25, 20)).to.equal(`The trip is budget-friendly, estimated cost is $500.00.`);
        });
        it('throws an error with invalid input', () => {
            expect(() => planYourTrip.estimateExpenses("", 5)).to.throw("Invalid Information!");
        });
        it('throws an error with invalid input', () => {
            expect(() => planYourTrip.estimateExpenses(null, null)).to.throw("Invalid Information!");
        });
        it('throws an error with invalid input', () => {
            expect(() => planYourTrip.estimateExpenses(1, null)).to.throw("Invalid Information!");
        });
        it('throws an error with invalid input', () => {
            expect(() => planYourTrip.estimateExpenses(null, 1)).to.throw("Invalid Information!");
        });
        it('throws an error with invalid input', () => {
            expect(() => planYourTrip.estimateExpenses(undefined, undefined)).to.throw("Invalid Information!");
        });
        it('throws an error with invalid input', () => {
            expect(() => planYourTrip.estimateExpenses(undefined, 1)).to.throw("Invalid Information!");
        });
        it('throws an error with invalid input', () => {
            expect(() => planYourTrip.estimateExpenses(1, undefined)).to.throw("Invalid Information!");
        });
        it('throws an error with invalid input', () => {
            expect(() => planYourTrip.estimateExpenses(5, "")).to.throw("Invalid Information!");
        });
        it('throws an error with invalid input', () => {
            expect(() => planYourTrip.estimateExpenses("5", "5")).to.throw("Invalid Information!");
        });
        it('throws an error with invalid input', () => {
            expect(() => planYourTrip.estimateExpenses(5, -1)).to.throw("Invalid Information!");
        });
        it('throws an error with invalid input', () => {
            expect(() => planYourTrip.estimateExpenses(-5, 1)).to.throw("Invalid Information!");
        });
        it('throws an error with invalid input', () => {
            expect(() => planYourTrip.estimateExpenses(-5, -1)).to.throw("Invalid Information!");
        });
        it('throws an error with invalid input', () => {
            expect(() => planYourTrip.estimateExpenses(0, 1)).to.throw("Invalid Information!");
        });
        it('throws an error with invalid input', () => {
            expect(() => planYourTrip.estimateExpenses(1, 0)).to.throw("Invalid Information!");
        });
        it('throws an error with invalid input', () => {
            expect(() => planYourTrip.estimateExpenses(0, 0)).to.throw("Invalid Information!");
        });
    });
});