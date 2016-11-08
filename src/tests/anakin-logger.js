'use strict';

const assert = require('assert');
const sinon = require('sinon');
const anakinLogger = require('./../anakin-logger');

describe('Anakin Logger',  () => {
        
    it('Should to log', () => {
        let stub = sinon.stub(console, 'log');
        
        const dependencyName = 'someModule';
        const dependencyPath = 'some/path';
        const expectedLog = `Dependency => ${dependencyName} | Path => ${dependencyPath}`;

        anakinLogger(dependencyName, dependencyPath);

        assert(stub.withArgs(expectedLog).calledOnce);

        stub.restore();
    });
    
});
