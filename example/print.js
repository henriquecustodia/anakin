'use strict';

module.exports = class {
    static print(){
        console.info(`it's ${Servant.get('class')}!`);
    }
}