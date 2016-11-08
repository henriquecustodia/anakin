'use strict';

const assert = require('assert');
const AnakinUseful = require('./../anakin-useful');

describe('Anakin Useful', () => {

    describe('findModule method', () => {

        it('Should to find the module', () => {
            const dependencyPath = `${__dirname}/mock/mock-module`;

            let module = AnakinUseful.findModule('mockModule', dependencyPath);

            assert.strictEqual(module, `I'm a module!`);
        });

        it('Should to throw an Anakin Error', () => {
            const dependencyName = 'mockModule';
            const dependencyPath = `./wrong/path`;

            assert.throws(() => {
                let module = AnakinUseful.findModule(dependencyName, dependencyPath);
            }, err => {
                return err.name === 'Anakin Error' &&
                err.message === `Cannot find '${dependencyName}' dependency at '${dependencyPath}'`;
            });
        });

    });

    describe('getAbsolutePath method',  () => {
        
        it('Should to get the absolute path', () => {
            const basePath = __dirname;
            const relativePath = 'some/path';

            const absolutePath = AnakinUseful.getAbsolutePath(basePath, relativePath);

            assert.strictEqual(absolutePath, './tests/some/path');
        });
        
    });

});
