module.exports = function (wallaby) {
    return {
      files: [
        './sum-of-intervals/kata.js'
      ],
  
      tests: [
        './sum-of-intervals/test.js'
      ],
  
      testFramework: 'mocha',
      env: {
        type: 'node'
      },
    };
  };