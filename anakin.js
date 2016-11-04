'use strict';

const Path = require('path');
const AnakinError = require('./anakin-error');
const logger = require('./anakin-logger');
const AnakinGetter = require('./anakin-getter');

module.exports = options => {
    let storage = new Map();

    options = options || {};
    options.base = options.base || '';
    options.singleton = options.singleton === true;

    function map(config) {
        for (let dependencyName in config) {

            let relativePath = config[dependencyName];

            if (typeof relativePath !== 'string') {
                throw new AnakinError('The path has to be a String type');
            }

            let absolutePath = AnakinGetter.getAbsolutePath(options.base, relativePath);

            let mappedObject = AnakinGetter.findModule(dependencyName, absolutePath);

            logger(dependencyName, relativePath);

            if (options.singleton) {
                storage.set(dependencyName, mappedObject);
                continue;
            }

            storage.set(dependencyName, absolutePath);
        }
    }

    function get(dependency) {
        if (!storage.has(dependency)) {
            throw new AnakinError(`Does not exists a dependency like '${dependency}'`);
        }

        if (options.singleton) {
            return storage.get(dependency);
        }

        return require(storage.get(dependency));
    }

    return {
        map: map,
        get: get
    };
}
