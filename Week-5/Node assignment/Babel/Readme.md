# Babel is a JavaScript compiler
Babel is used to convert higher features of javascript new version into browser compatable code without breaking our code.
Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript
in current and older browsers or environments.

1.Transform syntax
2.Polyfill features that are missing in your target environment. 
3.Source code transformations .

```
// Babel Input: ES2015 arrow function
[1, 2, 3].map((n) => n + 1);

// Babel Output: ES5 equivalent
[1, 2, 3].map(function(n) {
  return n + 1;
});
```
Babel has support for the latest version of JavaScript through syntax transformers.
These plugins allow you to use new syntax, right now without waiting for browser support. 

# Installation
```
npm install --save-dev @babel/preset-react
```
Babel provides a ripple which is used to convert higher versions of Javascript to the ES5 code which code used 
in browsers.
!(https://github.com/Jakkarohith/Berkadia-assignment/blob/master/Week-5/Node%20assignment/Babel/Screenshot%20(148).png)
