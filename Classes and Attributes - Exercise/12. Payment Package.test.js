import { expect } from "chai";
import { PaymentPackage } from "./paymentPackage.js";


describe('initialization of a Class', function () {
    it('test with a negative value', function () {
        expect(() => new PaymentPackage('test', -1)).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('', -1)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage([], -1)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage({}, -1)).to.throw('Name must be a non-empty string');

    }),
    it('test with a positive value', () => {
        expect(() => new PaymentPackage('', 1)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage('', 1)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage([], 1)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage({}, 1)).to.throw('Name must be a non-empty string');
    }),
    it('test with invalid values', () => {
        expect(() => new PaymentPackage('', 'test')).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage([], [])).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage({}, {})).to.throw('Name must be a non-empty string');
    }),
    it('test VAT initialization', function () {
         let paymentPackage = new PaymentPackage('test', 20);
        expect(paymentPackage.VAT).to.equal(20);
    }),
    it('test setting VAT method', () => {
        let paymentPackage = new PaymentPackage('test', 20);

        expect(paymentPackage.VAT = 19).to.equal(19);
        expect(() => paymentPackage.VAT = 'test').to.throw('VAT must be a non-negative number');
        expect(() => paymentPackage.VAT = -1).to.throw('VAT must be a non-negative number');
        expect(() => paymentPackage.VAT = []).to.throw('VAT must be a non-negative number');
        expect(() => paymentPackage.VAT = {}).to.throw('VAT must be a non-negative number');
    }),
    it('test active initialization', function () {
        let paymentPackage = new PaymentPackage('test', 20);
        expect(paymentPackage.active).to.equal(true);
        paymentPackage.active = false;
        expect(paymentPackage.active).to.equal(false);
   }),
   it('test setting active method', ()=> {
    let paymentPackage = new PaymentPackage('test', 20);
    expect(() => paymentPackage.active = 1).to.throw('Active status must be a boolean');
    expect(() => paymentPackage.active = -1).to.throw('Active status must be a boolean');
    expect(() => paymentPackage.active = 0).to.throw('Active status must be a boolean');
    expect(() => paymentPackage.active = '').to.throw('Active status must be a boolean');
    expect(() => paymentPackage.active = []).to.throw('Active status must be a boolean');
    expect(() => paymentPackage.active = {}).to.throw('Active status must be a boolean');
    }),
    it('Should return a string as all the input is correct - 1', () => {

    let paymentPackage = new PaymentPackage('abc', 123);

    let output = [
        `Package: abc`,
        `- Value (excl. VAT): 123`,
        `- Value (VAT 20%): 147.6`
    ];
    expect(paymentPackage.toString()).to.equal(output.join('\n'));
    }),
    it('Should return a string as all the input is correct - 2', () => {
        let flagClass = new PaymentPackage('abc', 123);
        flagClass.VAT = 30;
        let output = [
            `Package: abc`,
            `- Value (excl. VAT): 123`,
            `- Value (VAT 30%): 159.9`
        ]
        expect(flagClass.toString()).to.equal(output.join('\n'));
    }),
    it('Should return a string as all the input is correct - 3', () => {
        let flagClass = new PaymentPackage('abc', 123);
        flagClass.active = false;
        let output = [
            `Package: abc (inactive)`,
            `- Value (excl. VAT): 123`,
            `- Value (VAT 20%): 147.6`
        ]
        expect(flagClass.toString()).to.equal(output.join('\n'));
    }),
    it('Should return a string as all the input is correct - 4', () => {
        let flagClass = new PaymentPackage('abc', 123);
        flagClass.VAT = 30;
        flagClass.active = false;
        let output = [
            `Package: abc (inactive)`,
            `- Value (excl. VAT): 123`,
            `- Value (VAT 30%): 159.9`
        ]
        expect(flagClass.toString()).to.equal(output.join('\n'));
    })
});