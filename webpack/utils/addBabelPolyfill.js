require('babel-polyfill');

function addBabelPolyfill(entry) {
  if (Array.isArray(entry)) {
    return entry.unshift('babel-polyfill');
  }
  return ['babel-polyfill', entry];
}

module.exports = addBabelPolyfill;
