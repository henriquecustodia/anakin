'use strict';

module.exports = class PointerError extends Error {
    constructor(message) {
        super(message);
        this.name = 'Pointer Error';
    }
}