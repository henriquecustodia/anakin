'use strict';

let anakin = require('./../index')({
    base: __dirname,
    singleton: true
});

anakin.map({
    'welcome': 'welcome',
    'printer': 'print',
});

global.anakinInjector = anakin.get;

anakinInjector('printer')('Henrique');


