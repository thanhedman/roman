const assert = require('assert');
const processRoman = require('../roman');

describe('processRoman', function() {
    it('should handle a single "I"', function() {
        const expected = 1;
        const string = "I";
        assert.equal(processRoman(string), expected);
    });
});
