'use strict';

const assert = require('assert');
const sinon = require('sinon');
const anakin = require('./../anakin');

describe('Anakin', () => {

    describe('Core method', () => {

        it('Should to return an Object', () => {
            let anakinObject = anakin({
                base: __dirname
            });

            assert.strictEqual(typeof anakinObject.map, 'function');
            assert.strictEqual(typeof anakinObject.get, 'function');
        });

        it('Should to throw an Anakin Error when base path is undefined', () => {
            assert.throws(() => {
                anakin({
                    base: undefined
                })
            }, err => {
                return err.name === 'Anakin Error' &&
                    err.message === 'The base property has to be a String valid.';
            });

        });

        it('Should to throw an Anakin Error when base path is a String invalid', () => {
            assert.throws(() => {
                anakin({
                    base: ''
                })
            }, err => {
                return err.name === 'Anakin Error' &&
                    err.message === 'The base property has to be a String valid.';
            });

        });

    });

    describe('Anakin Object', () => {

        it('Should to throw an Anakin Error when the module path is not a String', () => {
            let anakinObject = anakin({
                base: __dirname
            });

            assert.throws(() => {
                anakinObject.map({
                    myDependency: 50
                });
            }, err => err.name === 'Anakin Error' &&
                err.message === 'The path has to be a String type.');
        });

        it('Should to throw an Anakin Error when dependency path does not exists', () => {
            let anakinObject = anakin({
                base: __dirname
            });

            assert.throws(() => {
                anakinObject.map({
                    myDependency: 'some/wrong/path'
                });
            }, err => err.name === 'Anakin Error' &&
                err.message === 'Cannot find \'myDependency\' dependency at \'./tests/some/wrong/path\'');
        });

        it('Should to log the mapped dependencies', () => {
            let stub = sinon.stub(console, 'log');

            const expectedLog = `Dependency => myDependency | Path => mock/mock-module`;

            let anakinObject = anakin({
                base: __dirname
            });

            anakinObject.map({
                myDependency: 'mock/mock-module'
            });

            assert(stub.withArgs(expectedLog).calledOnce);

            stub.restore();
        });

        it('Should to inject the dependency', () => {
            let anakinObject = anakin({
                base: __dirname
            });

            anakinObject.map({
                myDependency: 'mock/mock-module'
            });

            let myDependencyModule = anakinObject.get('myDependency');

            assert.strictEqual(myDependencyModule, `I'm a module!`);
        });

        it('Should to throw am Anakin Error when the dependency does not exists', () => {
            let anakinObject = anakin({
                base: __dirname
            });

            assert.throws(() => {
                anakinObject.get('myDependency');
            }, err => {
                return err.name === 'Anakin Error' &&
                err.message === 'Does not exists a dependency like \'myDependency\'.';
            });

        });

    });
});
