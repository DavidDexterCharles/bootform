#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> Generate forms from json objects.

Bootform takes a json object and treats it as a description of an html
form.

Example:

```js

   {
     "name":"MyForm",
     "action": "/post",
     "method": "post",
     "controls": [{"type":"text"},{"type":"text"}]
   }

```

The above json will create the following html:

```html
<form class="form-horizontal " name="MyForm" action="/post" method="post">
  <div class="form-group">
  
  <div class="col-md-9 pull-right">
    <input class="form-control" type="text"  />
  </div>
</div>


<div class="form-group">
  
  <div class="col-md-9 pull-right">
    <input class="form-control" type="text"  />
  </div>
</div>


</form>

```

## Install

```sh
$ npm install --save bootform
```


## Usage

```js
var bootform = require('bootform').getInstance(pathToTemplates);
var html = bootform.parse(input);

```

```sh
$ npm install --global bootform
$ bootform --help
```

##Themes

Bootform comes with one default theme in the `default` folder. To create
your own, you can follow the pattern in there. 

## License

MIT © [Lasana Murray](http://trinistorm.org)


[npm-url]: https://npmjs.org/package/bootform
[npm-image]: https://badge.fury.io/js/bootform.svg
[travis-url]: https://travis-ci.org/metasansana/bootform
[travis-image]: https://travis-ci.org/metasansana/bootform.svg?branch=master
[daviddm-url]: https://david-dm.org/metasansana/bootform.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/metasansana/bootform
