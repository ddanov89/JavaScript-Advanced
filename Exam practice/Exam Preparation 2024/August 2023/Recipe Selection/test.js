import { expect } from "chai";
import { recipeSelection } from "./recipeSelection.js";

describe('Test suite', function () {
    describe('test isTypeSuitable functionality ', function () {
        it("returns correct values if dietaryRestriction is correct", () => {
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegetarian')).to.equal("This recipe is not suitable for vegetarians");
        });
        it("returns correct values if dietaryRestriction is vegetarian", () => {
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegan')).to.equal("This recipe is not suitable for vegans");
        });
        it("returns correct values if dietaryRestriction is vegetarian", () => {
            expect(recipeSelection.isTypeSuitable('Soy', 'Vegan')).to.equal("This recipe is suitable for your dietary restriction");
        });
        it("throws an error if incorrect input values", () => {
            expect(() => recipeSelection.isTypeSuitable('Meat', 1)).to.throw("Invalid input");
        });
        it("throws an error if incorrect input values", () => {
            expect(() => recipeSelection.isTypeSuitable(1, 'Vegetarian')).to.throw("Invalid input");
        });
    });
    describe('test isItAffordable functionality ', function () {
        it("returns correct values if budget is correct", () => {
            expect(recipeSelection.isItAffordable(2, 1)).to.equal("You don't have enough budget to afford this recipe");
        });
        it("returns correct values if budget is correct", () => {
            expect(recipeSelection.isItAffordable(1, 1)).to.equal(`Recipe ingredients bought. You have 0$ left`);
        });
        it("throws an error if incorrect input values", () => {
            expect(() => recipeSelection.isItAffordable("", 1)).to.throw("Invalid input");
        });
        it("throws an error if incorrect input values", () => {
            expect(() => recipeSelection.isItAffordable(1, "")).to.throw("Invalid input");
        });
    });
    it('should return an array of recipe titles for the given category', () => {
        const recipes = [
            { title: "Pasta Carbonara", category: "Italian" },
            { title: "Spicy Tofu Stir-Fry", category: "Asian" },
            { title: "Classic Caesar Salad", category: "Salads" },
            { title: "Chocolate Chip Cookies", category: "Desserts" }
        ];

        expect(recipeSelection.getRecipesByCategory(recipes, "Italian")).to.deep.equal(["Pasta Carbonara"]);
        expect(recipeSelection.getRecipesByCategory(recipes, "Asian")).to.deep.equal(["Spicy Tofu Stir-Fry"]);
        expect(recipeSelection.getRecipesByCategory(recipes, "Salads")).to.deep.equal(["Classic Caesar Salad"]);
    });

    it('should throw an error for invalid input', () => {
        const recipes = [
            { title: "Pasta Carbonara", category: "Italian" },
            { title: "Spicy Tofu Stir-Fry", category: "Asian" }
        ];

        expect(() => { recipeSelection.getRecipesByCategory(recipes, 123) }).to.throw('Invalid input');
        expect(() => { recipeSelection.getRecipesByCategory("recipes", "Italian") }).to.throw('Invalid input');
    });
});