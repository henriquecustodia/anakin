'use strict';

const AnakinError = require('./anakin-error');
const logger = require('./anakin-logger');
const AnakinUseful = require('./anakin-useful');

module.exports = (options = {}) => {
    let storage = new Map();

    if (!options.base || typeof options.base !== 'string') {
        throw new AnakinError('The base property has to be a String valid.');
    }

    options.singleton = options.singleton === true;

    function map(config) {
        for (let dependencyName in config) {

            let relativePath = config[dependencyName];

            if (typeof relativePath !== 'string') {
                throw new AnakinError('The path has to be a String type.');
            }

            let absolutePath = AnakinUseful.getAbsolutePath(options.base, relativePath);

            let mappedObject = AnakinUseful.findModule(dependencyName, absolutePath);

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
            throw new AnakinError(`Does not exists a dependency like '${dependency}'.`);
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
