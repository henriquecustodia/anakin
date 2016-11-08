
<div align="center">
    <h1> Anakin </h1>
    <h3> This node module maps all application's dependencies and centralizes everything, at only one place. </h3>
</div>

<div align="center">
    <a href="https://travis-ci.org/henriquecustodia/anakin">
        <img src="https://travis-ci.org/henriquecustodia/anakin.svg?branch=master">
    </a>
</div>

## Quick start
```javascript
//module/to/get/  module.js
module.exports = `I'm here`;

//app.js
let anakin = require('anakin')({
    base: __dirname
});

anakin.map({
    something: 'module/to/get/module.js'
});

let something = anakin.get('something');

console.info(something); //I'm here`
```
## API
* `map` (mapperObj: **Object**): void

> This method maps all dependencies. The dependecy path does not need has a file extension (e.g .js or .json) because this method uses the `require` method internally.   
```javascript
    anakin.map({
        dependencyName: 'module/to/get/module.js'
    });
``` 

* `get` (module: **String**): any

> This method get a dependency was set in mapper object.   
```javascript
    anakin.get('someDependency');
```

Pull requests are very welcome!


