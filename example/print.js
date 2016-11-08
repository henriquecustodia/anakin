'use strict';

module.exports = name => {
    let welcome = anakinInjector('welcome');

    console.log(welcome(name));
};