module.exports = {
    // ...
    resolve: {
      fallback: {
        'firebase/app': require.resolve('firebase/app'),
      },
    },
  };
