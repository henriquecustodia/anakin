'use strict';

let Pointer = require('./../Pointer');

Pointer.map({
    'class': 'example/class',
    'Printer': 'example/print',
});

global.Pointer = Pointer;

let Printer = Pointer.get('Printer');

Printer.print();

