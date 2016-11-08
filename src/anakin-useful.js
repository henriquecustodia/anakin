'use strict';

const AnakinError = require('./anakin-error');
const path = require('path');

module.exports.findModule = (dependencyName, path) => {
    try {
        return require(path);
    } catch (err){
        throw new AnakinError(`Cannot find '${dependencyName}' dependency at '${path}'`);
    }
}

module.exports.getAbsolutePath = (basePath, relativePath) => {
    let fullRelativePath = basePath.replace('./', '') + '/' + relativePath;
    
    return './' + path.relative(__dirname, fullRelativePath);
}