# XML Middleware

A simple middleware for expressjs which allow an easy setup for xml support. Apart from that it also provides a standard response object for consistency.

## Installing

Using npm:

```bash
npm install @navneetlal/xml-middleware --save
```

Using yarn:

```bash
yarn add @navneetlal/xml-middleware
```

## Usage

`body-parser` or other (which can parse request body to text) is required for this middleware to work.

### CommonJS usage

```js
const xmlMiddleware = require('@navneetlal/xml-middleware');
const { text as textParserMiddleware } = require('body-parser');

app.use(textParserMiddleware({ type: ['xml', '+xml', 'text/xml'] }));
app.use(xmlMiddleware());
```

Now in order to send response, use `res.sendResponse()` instead of standard method provided by express.

You can also make use of `ServerResponse` class to construct a response object

```js
const responseObject = new ServerResponse(true, 'Success')
responseObject.results = { some: 'json' }

res.sendResponse(responseObject)
res.sendResponse(400, new ServerResponse(false, 'Oops! Somethings doesn\'t look right'))
```

### Typescript usage

This package is built on typescript and provides full support for the same.

## Issues

In case of any problem in the package open an issue here at [https://github.com/navneetlal/xml-middleware-expressjs/issues](https://github.com/navneetlal/xml-middleware-expressjs/issues)
