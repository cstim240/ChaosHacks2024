// fetchModule.js
let fetchFunction;

if (typeof window === "undefined") {
  // Node.js environment
  // eslint-disable-next-line global-require
  const fetchNode = require("node-fetch");
  fetchFunction = fetchNode;
} else {
  // Browser environment
  fetchFunction = fetch;
}
// to use: just do this in the js file:const fetch = require('./fetchModule');

module.export = fetchFunction;
