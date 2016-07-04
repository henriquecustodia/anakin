'use strict';

let anakin = require('./../index');

anakin.map({
    'class': 'example/class',
    'Printer': 'example/print',
});

global.anakin = anakin;

let Printer = anakin.get('Printer');

Printer.print();

