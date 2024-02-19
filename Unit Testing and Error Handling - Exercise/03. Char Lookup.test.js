import { assert } from "chai";
import { lookupChar } from "./charLookup.js";

describe('test lookup functionality', function () {
    it('test with invalid data', () => {
        assert.isUndefined(lookupChar(2, 2), undefined, 'input must be a string');
        assert.isUndefined(lookupChar({}, 2), undefined, 'input must be a string');
        assert.isUndefined(lookupChar([], 1), undefined, 'input must be a string');
        assert.isUndefined(lookupChar('string', 1.5), undefined, 'index must be an integer');
        assert.isUndefined(lookupChar('string', []), undefined, 'index must be an integer');
        assert.isUndefined(lookupChar('string', {}), undefined, 'index must be an integer');
        assert.isUndefined(lookupChar('string', null), undefined, 'index must be an integer');
        assert.isUndefined(lookupChar('string', undefined), undefined, 'index must be an integer');
        assert.isUndefined(lookupChar(null, null), undefined, 'input must be a valid string and index must be an integer');
        assert.isUndefined(lookupChar(undefined, undefined), undefined, 'input must be a valid string and index must be an integer');
    }),
    it('test with valid data', () =>{
        assert.equal(lookupChar('char', 1), 'h', 'input values are correct');
    }),
    it('test with invalid index values', function () {
        assert.equal(lookupChar('', 1), 'Incorrect index', 'input must a valid string');
        assert.equal(lookupChar('string', -1), 'Incorrect index', 'index must be an integer');
        assert.equal(lookupChar('', 0), 'Incorrect index', 'index must be an integer')
    })
});