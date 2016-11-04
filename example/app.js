'use strict';

let anakin = require('./../index')({
    base: __dirname,
    singleton: true
});

anakin.map({
    'class': 'class',
    'Printer': 'print',
});

global.anakin = anakin;

let Printer = anakin.get('Printer');

Printer.print();

