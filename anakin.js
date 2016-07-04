'use strict';

const Path = require('path');
const AnakinError = require('./anakinError');

let storage = new Map();

module.exports = class Anakin {
    static map(config) {
        for (let prop in config) {

            let path = config[prop];

            if (typeof path !== 'string') {
                throw new AnakinError('The path has to be a String type');
            }

            path = './' + Path.relative(__dirname, path);

            storage.set(prop, path);
        }
    }

    static get(dependency) {
        if (!storage.has(dependency)) {
            throw new AnakinError(`Has not Anakin for '${dependency}'`);
        }

        let path = storage.get(dependency);
        return require(path);
    }
}
