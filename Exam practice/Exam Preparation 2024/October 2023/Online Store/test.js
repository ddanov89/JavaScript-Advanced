import { expect } from "chai";
import { onlineStore } from "./onlineStore.js";

describe('Test Suite', function () {

    describe('Testing isProductAvailable functionality', function () {
        it('input value for stock is 0', () => {
            expect(onlineStore.isProductAvailable('puzzle', 0)).to.equal(`Sorry, puzzle is currently out of stock.`);
        });
        it('input value for stock with a negative number', () => {
            expect(onlineStore.isProductAvailable('puzzle', -1)).to.equal(`Sorry, puzzle is currently out of stock.`);
        });
        it('input value for stock with a positive number', () => {
            expect(onlineStore.isProductAvailable('puzzle', 1)).to.equal(`Great! puzzle is available for purchase.`);
        });
        it('throws an error with invalid input', () => {
            expect(() => onlineStore.isProductAvailable('Puzzle', 'Pesho')).to.throw("Invalid input.");
        });
        it('throws an error with invalid input', () => {
            expect(() => onlineStore.isProductAvailable(1, 1)).to.throw("Invalid input.");
        });
    });

    describe('Testing canAffordProduct functionality', function () {
        it('returns correct values if result is less than 0', () => {
            expect(onlineStore.canAffordProduct(3, 2)).to.equal("You don't have sufficient funds to buy this product.");
        });
        it('returns correct values if result is greater than 0', () => {
            expect(onlineStore.canAffordProduct(1, 2)).to.equal(`Product purchased. Your remaining balance is $1.`);
        });
        it('returns correct values if result is 0', () => {
            expect(onlineStore.canAffordProduct(1, 1)).to.equal(`Product purchased. Your remaining balance is $0.`);
        });
        it('throws an error with invalid input', () => {
            expect(() => onlineStore.canAffordProduct("Bebo", 1)).to.throw("Invalid input.");
        });
        it('throws an error with invalid input', () => {
            expect(() => onlineStore.canAffordProduct(1, 'Bebo')).to.throw("Invalid input.");
        });
    });
    describe('Testing getRecommendedProducts functionality', function () {
        it('returns correct values if category is matched', () => {
            expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }, { name: "Puzzle", category: "Games" }], "Photography")).to.equal(`Recommended products in the Photography category: Camera`);
        });
        it('returns correct values if category is not matched', () => {
            expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" },{ name: "Puzzle", category: "Games" }], "Puzzle")).to.equal(`Sorry, we currently have no recommended products in the Puzzle category.`);
        });
        it('throws an error with invalid input', () => {
            expect(() => onlineStore.canAffordProduct(1, "Camera")).to.throw("Invalid input.");
        });
        it('throws an error with invalid input', () => {
            expect(() => onlineStore.canAffordProduct([{ name: "Camera", category: "Photography" },{ name: "Puzzle", category: "Games" }], 1)).to.throw("Invalid input.");
        });
    });
});