'use strict';

const Error = require('./anakin-error');
const path = require('path');

module.exports.findModule = (dependencyName, path) => {
    try {
        return require(path);
    } catch (err){
        throw new Error(`Cannot find '${dependencyName}' module at '${path}'`);
    }
}

module.exports.getAbsolutePath = (basePath, relativePath) => {
    let fullRelativePath = basePath.replace('./', '') + '/' + relativePath;
    
    return './' + path.relative(__dirname, fullRelativePath);
}