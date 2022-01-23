/* config-overrides.js */

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    return {
        ...config,
        resolve: {
            fallback: {
                "stream": require.resolve("stream-browserify"),
                "crypto": require.resolve("crypto-browserify")
            }
        }
    };
  }