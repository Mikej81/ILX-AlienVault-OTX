'use strict';
var configuration = require('./configure.js');

module.exports = function otxapi(apiKey) {
  if (apiKey !== undefined && typeof apiKey === 'string') {
    configuration.apiKey = apiKey;
  }

  return {
    agent: configuration.userAgent,
    version: configuration.sdkVersion,
    configuration: configuration,
    indicators: require('./indicators.js')(),
    //pulses: require('./resources/Pulses')(),
    //search: require('./resources/Search')(),
    //users: require('./resources/Users')()
  };
};
