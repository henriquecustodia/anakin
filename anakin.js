'use strict';

const Path = require('path');
const AnakinError = require('./anakin-error');
const logger = require('./anakin-logger');
const AnakinGetter = require('./anakin-getter');

module.exports = class Anakin {
    constructor(options) {
        this.storage = new Map();

        this.options = options || {};
        this.options.base = this.options.base || '';
        this.options.singleton = this.options.singleton === true;
    }

    map(config) {
        for (let dependencyName in config) {

            let relativePath = config[dependencyName];

            if (typeof relativePath !== 'string') {
                throw new AnakinError('The path has to be a String type');
            }

            let absolutePath = AnakinGetter.getAbsolutePath(this.options.base, relativePath);

            let mappedObject = AnakinGetter.findModule(dependencyName, absolutePath);

            logger(dependencyName, relativePath);

            if (this.options.singleton) {
                this.storage.set(dependencyName, mappedObject);
                continue;
            }
            
            this.storage.set(dependencyName, absolutePath);
        }
    }

    get(dependency) {
        if (!this.storage.has(dependency)) {
            throw new AnakinError(`Does not exists a dependency like '${dependency}'`);
        }
        
        if (this.options.singleton) { 
            return this.storage.get(dependency);
        }

        return require(this.storage.get(dependency));
    }
}
