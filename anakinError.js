'use strict';

module.exports = class AnakinError extends Error {
    constructor(message) {
        super(message);
        this.name = 'Anakin Error';
    }
}