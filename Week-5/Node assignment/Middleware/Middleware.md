# Middleware:
Middleware functions are functions that have access to the request object (req), the response object (res), and the next function
in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes
the middleware succeeding the current middleware.

# Middleware functions can perform the following tasks:
```
1.Execute any code.
2.Make changes to the request and the response objects.
3.End the request-response cycle.
4.Call the next middleware in the stack.
```
If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next 
middleware function. Otherwise, the request will be left hanging.

# Types of Middleware:

### 1.Application level middleware.
### 2.Router level middleware.
### 3.Error handling middleware.
### 4.Built-in middleware.
### 5.Third party middleware.

# 1.Application level middleware :
Application level middleware is the  middleware which is applicable  every  route of the application .	
Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, where METHOD 
is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.
#### Example: 
```   
 var app = express()
	 app.use(function (req, res, next) 
	 {
    		console.log('Time:', Date.now());
    		next();	
     });
```	 
# 2.Router level middleware :
Router-level middleware works in the same way as application-level middleware, except it is applicable for the particular route of the application .
The middleware could be applied in any number for a particular route. It is bound to an  instance of express.Router().
#### Example:
```
var app = express()
var router = express.Router()
router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})
```
# 3.Error handling middleware :
Error-handling middleware always takes four arguments. Must be  provided with four arguments to identify it as an error-handling middleware function. 
Even if it  doesn’t need to use the next object, it must be specifed inorder maintain the signature. Otherwise, the next object will be interpreted as regular 
middleware and will fail to handle errors.
#### Example :
```
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Error!')
})	
``` 
# 4.Built-in middleware :
Starting with version 4.x, Express no longer depends on Connect. The middleware functions that were previously included with Express are now in separate
modules.
Express has the following built-in middleware functions:
1. express.static : It serves static assets such as HTML files, images, and so on.
2.express.json : It parses incoming requests with JSON payloads. Available with Express 4.16.0+
3.express.urlencoded : It parses incoming requests with URL-encoded payloads.Available with Express 4.16.0+
# 5.Third party middleware :
Third-party middleware is the middleware which is developed by third party  to add functionality to Express apps.
Install the Node.js module for the required functionality, then load it in  application  at the application level or at the router level.
#### Example :
```
$ npm install cookie-parser

var express = require('express')
var app = express()
var cookieParser = require('cookie-parser');
app.use(cookieParser()); // load the cookie-parsing middleware
```