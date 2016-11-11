'use strict';

module.exports.hello = (event, context, callback) => {
  console.log(JSON.stringify(event));
  callback();
};
