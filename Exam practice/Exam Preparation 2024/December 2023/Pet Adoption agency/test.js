import { expect } from "chai";
import { petAdoptionAgency } from "./petAdoptionAgency.js";

describe('Test Suite', function () {

    describe('testing isPetAvailable functionality', function () {
        it('returns correct output for availableCount less than 0 or equal to 0', () => {
            expect(petAdoptionAgency.isPetAvailable("dog", 0, true)).to.equal(`Sorry, there are no dog(s) available for adoption at the agency.`);
        });
        it('returns correct output for availableCount of 1 with vaccination', () => {
            expect(petAdoptionAgency.isPetAvailable("dog", 1, true)).to.equal(`Great! We have 1 vaccinated dog(s) available for adoption at the agency.`);
        });
        it('returns correct output for availableCount of 1 no vaccination', () => {
            expect(petAdoptionAgency.isPetAvailable("dog", 1, false)).to.equal(`Great! We have 1 dog(s) available for adoption, but they need vaccination.`);
        });
        it('throws an error with invalid input', () => {
            expect(() => petAdoptionAgency.isPetAvailable(1, 1, true)).to.throw();
        });
        it('throws an error with invalid input', () => {
            expect(() => petAdoptionAgency.isPetAvailable('', '', true)).to.throw();
        });
        it('throws an error with invalid input', () => {
            expect(() => petAdoptionAgency.isPetAvailable("", 1, 1)).to.throw();
        });
    });
    describe('testing getRecommendedPets functionality', function () {
        it('returns correct output with no matches', () => {
            expect(petAdoptionAgency.getRecommendedPets([{name: 'Blecky', traits: 'fluffy'}, {name: 'Rijko', traits: 'brown' }], 'yellow')).to.equal(`Sorry, we currently have no recommended pets with the desired traits: yellow.`);
        });
        it('returns correct output with 1 match', () => {
            expect(petAdoptionAgency.getRecommendedPets([{name: 'Blecky', traits: 'fluffy'}, {name: 'Rijko', traits: 'brown'}], 'brown')).to.equal(`Recommended pets with the desired traits (brown): Rijko`);
        });
        it('throws an error with invalid input', () => {
            expect(() => petAdoptionAgency.isPetAvailable([], 'brown')).to.throw();
        });
        it('throws an error with invalid input', () => {
            expect(() => petAdoptionAgency.isPetAvailable([{name: 'Blecky', traits: 'fluffy'}, {name: 'Rijko', traits: 'brown'}], 1)).to.throw();
        });
    });
    describe('testing adoptPet functionality', () => {
        it('returns correct output', function () {
            expect(petAdoptionAgency.adoptPet("dog", 'Peshko')).to.equal(`Congratulations, Peshko! You have adopted dog from the agency. Enjoy your time with your new furry friend!`);
        });
        it('throws an error with invalid input', () => {
            expect(() => petAdoptionAgency.adoptPet("dog", [])).to.throw();
        });
        it('throws an error with invalid input', () => {
            expect(() => petAdoptionAgency.adoptPet("dog", 1)).to.throw();
        });
        it('throws an error with invalid input', () => {
            expect(() => petAdoptionAgency.adoptPet(1, 1)).to.throw();
        });
        it('throws an error with invalid input', () => {
            expect(() => petAdoptionAgency.adoptPet(["dog"], 1)).to.throw();
        });
        it('throws an error with invalid input', () => {
            expect(() => petAdoptionAgency.adoptPet({dog : 'Peshko'}, 1)).to.throw();
        });
        it('throws an error with invalid input', () => {
            expect(() => petAdoptionAgency.adoptPet(1, 'dog')).to.throw();
        });
        it('throws an error with invalid input', () => {
            expect(() => petAdoptionAgency.adoptPet(1, ['dog'])).to.throw();
        });
        it('throws an error with invalid input', () => {
            expect(() => petAdoptionAgency.adoptPet(1, {})).to.throw();
        });
        it('throws an error with invalid input', () => {
            expect(() => petAdoptionAgency.adoptPet(null, 'dog')).to.throw();
        });
        it('throws an error with invalid input', () => {
            expect(() => petAdoptionAgency.adoptPet(undefined, undefined)).to.throw();
        });
        it('throws an error with invalid input', () => {
            expect(() => petAdoptionAgency.adoptPet(null, null)).to.throw();
        });
    });
});