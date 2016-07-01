'use strict';

let _class = Mapper.get('class');

module.exports = class {
    static print(){
        console.info(`it was ${_class}!`);
    }
}