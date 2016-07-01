'use strict';

const Path = require('path');
const MapperError = require('./MapperError');

let storage = new Map();

module.exports = class Injector {
    static map(config) {
        for (let prop in config) {

            let path = config[prop];

            if (typeof path !== 'string') {
                throw new MapperError('The path has to be of type String');
            }

            path = './' + Path.relative(__dirname, path);

            storage.set(prop, path);
        }
    }

    static get(dependency) {
        if (!storage.has(dependency)) {
            throw new MapperError(`Has not mapper for '${dependency}'`);
        }

        let path = storage.get(dependency);
        return require(path);
    }
}
