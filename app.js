'use strict';

let Pointer = require('./lib/Pointer');

Pointer.map({
    'class': 'app/class',
    'Printer': 'app/print',
});

global.Pointer = Pointer;

let Printer = Pointer.get('Printer');

Printer.print();

