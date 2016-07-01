'use strict';

module.exports = class MapperError extends Error {
    constructor(message) {
        super(message);
        this.name = 'Mapper Error';
    }
}