# Anakin
This node module maps all application's dependencies and centralizes everything, at only one place

## Quick start
```javascript
//module/to/get/  module.js
module.exports = `I'm here`;

//app.js
let anakin = require('anakin');

anakin.map({
    'something': 'module/to/get/module.js'
});

let something = anakin.get('something');

console.info(something); //I'm here`
```
## Api
* map (**mapObj**: Object): void
* get (**module**: String): any
