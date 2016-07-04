'use strict';

let Servant = require('./../index');

Servant.map({
    'class': 'example/class',
    'Printer': 'example/print',
});

global.Servant = Servant;

let Printer = Servant.get('Printer');

Printer.print();

