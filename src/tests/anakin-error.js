'use strict';

const assert = require('assert');
const AnakinError = require('./../anakin-error');

describe('Anakin Error', () => {
    
    it('Should to throw an Anakin Error using the custom message',  () => {
        const customMessage = 'My Custom Message =)';

        assert.throws(() => {
           throw new AnakinError(customMessage);
        }, err => {
            return err.name === 'Anakin Error' && err.message === customMessage;
        });
    });
    
});
