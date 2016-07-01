'use strict';

let Mapper = require('./lib/Mapper');

Mapper.map({
    'class': 'app/class',
    'Printer': 'app/print',
});

global.Mapper = Mapper;

let Printer = Mapper.get('Printer');

Printer.print();

