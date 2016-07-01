'use strict';

let _class = Pointer.get('class');

module.exports = class {
    static print(){
        console.info(`it was ${_class}!`);
    }
}